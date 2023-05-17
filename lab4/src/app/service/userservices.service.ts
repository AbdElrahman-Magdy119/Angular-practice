import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User} from '../interface'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserservicesService {

  constructor(private http:HttpClient)
  {

   }
  
   getAllUsers():Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUser(id: number) {
    return this.http.get<User>(
      'https://jsonplaceholder.typicode.com/users/' + id,
      {
        headers: new HttpHeaders().set('Authorization', 'secret token'),
      }
    );
  }


  
}
