import { Component, OnDestroy, OnInit } from '@angular/core';

import {Subscription, Observable} from 'rxjs'

import {map,filter} from 'rxjs/operators'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  private firstObsSub: Subscription;
  constructor() { }

  ngOnInit() {
    // this.firstObsSub = interval(1000).subscribe(count=>{
    //   console.log(count);
    // });  
    const customIntervalObs = Observable.create(observer=>{
      let count=0;
      setInterval(()=>{
        observer.next(count);
        if (count===2){
          observer.complete();
        }
        if (count>3){
          observer.error(new Error('Count is greater 3!'));
        }        
        count++;
      },1000);
    });

    

    this.firstObsSub=customIntervalObs.pipe(filter(
      (data:number)=>{
        return data>0;
    }),map((data:string) =>{return "Round: "+ (data+1);
  }), ).subscribe(data => {
      console.log(data);
    },error=>{
      console.log(error);
    alert(error.message);
  }, ()=>{
    console.log("completed");
  });
  }

    ngOnDestroy(): void {
      this.firstObsSub.unsubscribe();
    }

}
