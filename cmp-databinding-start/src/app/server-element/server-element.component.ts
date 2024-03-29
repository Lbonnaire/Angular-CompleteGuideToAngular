import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation:ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  @Input('srvElement') element:{type:string, name:string, content:string}
  @Input() name:string;
  @ViewChild('heading', {static:true}) header: ElementRef;
  @ContentChild('contentParagraph',{static:true}) paragraph:ElementRef;

  constructor(){
    console.log("constructor called!")
  }
  ngOnInit(): void {
    console.log("ngOnInit called!")
    console.log(this.header.nativeElement.textContent);
    
  }
  ngOnChanges(changes:SimpleChanges){
    console.log(changes);
    
  }

  ngDoCheck(): void {
    console.log("ngDoCheck called!");
    
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called!");
  }
  ngAfterContentChecked(): void {
    console.log(" ngAfterContentChecked called!");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called!");
  }
  ngAfterViewChecked(): void {
    console.log(" ngAfterViewChecked called!");
  }

  ngOnDestroy(): void {
    console.log(" ngOnDestroy called!");
  }
}
