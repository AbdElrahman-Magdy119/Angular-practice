import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserService} from '../../service/user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
       id!: number;
       users:any
        constructor(private route: ActivatedRoute,private userService:UserService) {

          this.route.paramMap.subscribe(params => {
            this.id = Number(params.get('id'));
            console.log(this.id)

            this.userService.getalluser().subscribe(users => {
              console.log(users)
            })
            
          })

          this.route.queryParamMap.subscribe(params => {
            console.log(params.get('value'))
            
       
          })
          
        }
}
