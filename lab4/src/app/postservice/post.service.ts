import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from '../interface'
import { Observable } from 'rxjs';
import {post} from '../interface';
import { comment } from '../interface'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient)
  {

   }

   getpost(id: number):Observable<post[]> {
    return this.http.get<post[]>(
      'https://jsonplaceholder.typicode.com/posts?userId=' + id,
      {
        headers: new HttpHeaders().set('Authorization', 'secret token'),
      }
    );
  }

   createposts(title:HTMLInputElement,body:HTMLInputElement,id:number) {
    let res =  this.http.post(
        'https://jsonplaceholder.typicode.com/posts',{title:title.value,body:body.value,userId:id}
       )
       console.log(res)
   }

   getcomments(id: number):Observable<comment[]> {
    return this.http.get<comment[]>(
      'https://jsonplaceholder.typicode.com/comments?postId=' + id,
      {
        headers: new HttpHeaders().set('Authorization', 'secret token'),
      }
    );
  }
   
  getpostbyid(id: number) {
    return this.http.get<post>(
      'https://jsonplaceholder.typicode.com/posts/' + id,
      {
        headers: new HttpHeaders().set('Authorization', 'secret token'),
      }
    );
  }



}
