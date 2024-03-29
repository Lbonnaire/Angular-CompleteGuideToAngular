import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { map ,catchError, tap} from "rxjs/operators";
import { Subject,throwError } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class PostsService{
    error =new Subject<string>();
    constructor(private http:HttpClient){

    }

    createAndStorePost(title:string,content:string){
        const postData:Post={title:title, content:content};
        this.http.post<{name:string}>('https://angularcompletecourse1-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        postData,
        {
            observe:'response',
             responseType:'json'
        }).subscribe(
            responseData=>{
            console.log(responseData);
          }, error=>{
            this.error.next(error.message);
          });
    }

    fetchPost(){
        let searchParams= new HttpParams();
        searchParams= searchParams.append('print', 'pretty')
        searchParams= searchParams.append('print2', 'pretty2')
        return this.http.get<{[key:string]:Post}>("https://angularcompletecourse1-default-rtdb.europe-west1.firebasedatabase.app/posts.json",{
            headers:new HttpHeaders({"Custom-Header":'Hello'}),
            params:searchParams
        }).pipe(
            map(responseData=>{
            const postsArray:Post[]=[];
            for (const key in responseData) {
              if (responseData.hasOwnProperty(key)){
                postsArray.push({...responseData[key],id:key});
              }
            }
            return postsArray;
          }),catchError(errorResp=>{
            return throwError(errorResp);
          })
          );
    }


    clearPosts(){
        // const postData:Post = {title:title, content:content};
    
        return this.http.delete("https://angularcompletecourse1-default-rtdb.europe-west1.firebasedatabase.app/posts.json",{
            observe:'events',
            responseType:'text'
        })
        .pipe(tap(event=>{
            console.log(event);
            if(event.type===HttpEventType.Sent){
                //console.log(event.type);
            }
            if(event.type===HttpEventType.Response){
                console.log(event.body);
            }
        }));
    }
}
