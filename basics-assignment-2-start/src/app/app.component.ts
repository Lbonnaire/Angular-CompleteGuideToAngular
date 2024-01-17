import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  username='';
  inputEmpty=true;

  constructor(){

  }

  ngOnInit(): void {
    
  }
  onButtonClick(){
    this.username=""
    this.inputEmpty=true;
  }
  
  onInputCreated(event:any){
    this.username= (<HTMLFormElement>event.target).value;
    if(this.username!=""){
      this.inputEmpty=false;
    }else{
      this.inputEmpty=true;
    }
    
  }
}
