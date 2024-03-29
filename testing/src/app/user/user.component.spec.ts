// import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBed, async, fakeAsync, tick, waitForAsync } from "@angular/core/testing"
import { UserComponent } from "./user.component"
import { UserService } from "./user.service";
import { DataService } from "../shared/data.service";

// import { UserComponent } from './user.component';

describe('Component:User',() => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[UserComponent]
    });
  });
  it('should create the app',() => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  it('Should use the username from the service',() => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let userService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    expect(userService.user.name).toEqual(app.user.name);
  });
  it('Should display the username if the user is logged in',() => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    app.isloggedIn=true;
    fixture.detectChanges();
    let compiled= fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(app.user.name);
  });
  it('Shouldn\'t display the username if the user is logged in',() => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    app.isloggedIn=false;
    fixture.detectChanges();
    let compiled= fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).not.toContain(app.user.name);
  });
  it('shouldnt fetch data successfully if not call asynchronously', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    app.isloggedIn=false;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService,'getDetails')
    .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      return expect(app.data).toBe('Data');
    })
    
  });

  it('should fetch data successfully if not call asynchronously', fakeAsync(() => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    app.isloggedIn=false;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService,'getDetails')
    .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    tick();
    expect(app.data).toBe('Data');
  }));




})



