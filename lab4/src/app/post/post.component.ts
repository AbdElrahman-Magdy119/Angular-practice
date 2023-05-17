import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PostService} from '../postservice/post.service';
import{comment} from '../interface'
import { post } from '../interface';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
        post!:post
        comments!:comment[]
   
        constructor(private postService: PostService, private route: ActivatedRoute) {
              
          this.route.paramMap.subscribe((paramMap) => {
            postService.getpostbyid( Number(paramMap.get('id'))).subscribe (post => {
             this.post = post;
           })   
          })
   

          this.route.paramMap.subscribe((paramMap) => {
            postService.getcomments( Number(paramMap.get('id'))).subscribe (comments => {
             this.comments = comments;
             
           })   
          })


        }
}
