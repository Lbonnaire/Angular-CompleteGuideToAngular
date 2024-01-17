import { Component } from '@angular/core';
import { consumerBeforeComputation } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .fifth{
        color:white;
    }`]
})
export class AppComponent {
  buttonPressed=false;
  buttonClickCounter=0;
  displayedItems=[];

  onButtonClick(){
    this.buttonPressed=true;
    this.buttonClickCounter++; 
    this.displayedItems.push(new Date()); 

  }
}
