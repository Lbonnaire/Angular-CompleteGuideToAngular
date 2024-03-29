import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: "./app-servers",
  selector:'app-servers',
  // template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit{
  allowNewServer =false;
  serverCreationStatus = "No server has been created!";
  serverName= "TestServer";
  serverCreated=false;
  servers=['Testserver', 'Testserver 2'];
  constructor(){
    setTimeout(()=>{
      this.allowNewServer=true;
    }, 2000)
  }
  ngOnInit(): void {
    
  }

  onCreateServer(){
    this.serverCreationStatus= "Server was created! Name is " + this.serverName;
    this.serverCreated=true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event:any){
    this.serverName=(<HTMLInputElement>event.target).value;
    
  }
}
