import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrl: './even.component.css'
})
export class EvenComponent implements OnInit{
 @Input('evenNumb') even:{value:number}
 
 constructor(){

 }

 ngOnInit(): void {
   
 }
}
