import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {post, User} from '../interface'
import {UserservicesService} from '../service/userservices.service';
import {PostService} from '../postservice/post.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
     userdata!:User
     userpost!:post[]
     
     constructor(private route: ActivatedRoute, private userService: UserservicesService , private postservice:PostService) {
       this.route.paramMap.subscribe((paramMap) => {
         userService.getUser( Number(paramMap.get('id'))).subscribe (users => {
          this.userdata = users;
        })   
       })

       this.route.paramMap.subscribe((paramMap) => {
        postservice.getpost( Number(paramMap.get('id'))).subscribe (post => {
         this.userpost = post;
       })   
      })

       }
    
       createpost(tittle:HTMLInputElement,body:HTMLInputElement)
       {
          this.postservice.createposts(body,tittle,Number(this.route.snapshot.paramMap.get('id')))
       }

}
