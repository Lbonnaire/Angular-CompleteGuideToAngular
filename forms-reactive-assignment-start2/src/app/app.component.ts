import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signupForm: FormGroup;
  forbiddenProjectNames = 'Test'
  onSubmit() {
    console.log(this.signupForm);

  }
  
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required,CustomValidators.invalidProjectName ],CustomValidators.forbiddenNamesAsync.bind(this)),
      'email': new FormControl(null, [Validators.required,Validators.email]),
      'status': new FormControl('critical')

    });
    this.signupForm.statusChanges.subscribe(
      (status)=> console.log(status)
    );
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (control.value === this.forbiddenProjectNames) {
      return { 'invalidProjectName': true };
    }
    return null;
  }

  
}
