import { Component, ContentChild, ElementRef, EventEmitter, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent implements OnInit{
  @Output() gameStarted= new EventEmitter<{incrementEmit:number}>();

  timerid;
  increment:number=0;
  values = [{increment:0}];

  

  onStartGame(){
    this.timerid= setInterval(()=>this.incrementNumber(),1000);
  }

  onStopGame(){
    clearInterval(this.timerid);
  }
  
  incrementNumber(){
    this.increment++;
    this.gameStarted.emit({
      incrementEmit: this.increment
    });

    this.values.push({
      increment: this.increment
      });
      console.log(this.values)
    console.log(this.increment);
  }
  constructor(){

  }

  ngOnInit(): void {
  }
}
