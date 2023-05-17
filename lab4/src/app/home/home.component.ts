import { Component } from '@angular/core';
import {User} from '../interface'
import  { UserservicesService } from '../service/userservices.service';
import { Observable } from 'rxjs';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   users!:User[];
   constructor(private userService:UserservicesService){
       userService.getAllUsers().subscribe (users => {
        this.users = users;
      })
      
   }
}
