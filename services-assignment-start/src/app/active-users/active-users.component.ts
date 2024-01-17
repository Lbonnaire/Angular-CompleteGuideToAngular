import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../UsersService.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  users: string[];

  constructor(private usersService:UserService){}
  ngOnInit(): void {
    this.users = this.usersService.activeUsers;
  }
  onSetToInactive(id: number) {

  }
}
