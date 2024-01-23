import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit,OnDestroy{
  collapsed =true;
  selected:string='';
  userSub:Subscription;
  isAuthenticated=false;

  constructor(private router:Router, private route:ActivatedRoute,private dataStorageServ:DataStorageService, private authService: AuthService){
  }
  
  onSaveData(){
    this.dataStorageServ.storeRecipes();
  }
 
  onFetchData(){
    this.dataStorageServ.fetchRecipes().subscribe();
  }

  ngOnInit(): void {
    this.userSub=this.authService.user.subscribe(
      user=>{
        this.isAuthenticated=!!user;
        console.log(!user);
        console.log(!!user);
      }
    );
  }
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  onLogout(){
    this.authService.logout();
  }
}
