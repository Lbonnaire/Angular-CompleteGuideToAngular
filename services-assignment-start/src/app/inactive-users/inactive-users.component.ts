import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../UsersService.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  @Input() users: string[];

  constructor(private usersService:UserService){}
  ngOnInit(): void {
    this.users= this.usersService.inactiveUsers;
  }
  onSetToActive(id: number) {
  }
  
}
