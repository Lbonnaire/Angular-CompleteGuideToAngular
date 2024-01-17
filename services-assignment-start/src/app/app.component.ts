import { Component, OnInit } from '@angular/core';
import { UserService } from './UsersService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  constructor(private usersService:UserService){
  }

  ngOnInit(): void {
  }
  onSetToInactive(id: number) {
    
    this.usersService.addInactiveUsers(id);
  }

  onSetToActive(id: number) {
    this.usersService.addActiveUsers(id);
  }
}

