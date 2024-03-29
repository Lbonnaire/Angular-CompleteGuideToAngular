import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { PostsService } from './post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  loadedPosts = [];
  isFetching=false;
  error=null;
  private errorSub: Subscription;
  constructor(private http: HttpClient, private postService:PostsService) {}

  ngOnInit() {
    this.errorSub=this.postService.error.subscribe(
      errorMessage =>{
        this.error =errorMessage;
      }
    )
    this.postService.fetchPost().subscribe(posts=>{
      this.isFetching=false;
      this.loadedPosts=posts;
    },
    error=>{
      this.isFetching=false;
      this.error= error.message;
    });
  }
  onHandleError(){
    this.error=null;
    
  }
  onCreatePost(postData: Post) {
    // Send Http request
   this.postService.createAndStorePost(postData.title,postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.postService.fetchPost().subscribe(posts=>{
      this.isFetching=false;
      this.loadedPosts=posts;
    },
    error=>{
      this.error= error.message;
      console.log(error);
      
    });
  }

  onClearPosts() {
    // Send Http request
    this.postService.clearPosts().subscribe(()=>{
      this.loadedPosts=[];
    });
    

  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }


}
