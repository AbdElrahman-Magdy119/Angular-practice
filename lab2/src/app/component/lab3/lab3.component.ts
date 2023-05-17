import { Component, Input } from '@angular/core';
import postsarray from '../../../assets/posts.json'
import {GetpostsService} from '../../../app/service/getposts.service'

type post = {
  id:number,
  title: string,
	content: string,
	image: string,
	createdAt?:string,
	likes: string,
	creator: {
			id: number,
			name:string,
			followers: string,
			isOnline:boolean,
			isFollowing:boolean
  }
}
@Component({
  selector: 'app-lab3',
  templateUrl: './lab3.component.html',
  styleUrls: ['./lab3.component.css']
})
export class Lab3Component   {

  postcard!:post[];
  @Input('id') id!:any;

  post!:any;
  constructor(private getPostsService:GetpostsService) 
  {
    this.postcard=postsarray;
    
  }
 
  ngOnInit() {
   this.post = this.getPostsService.getpostbyid(this.id); 
}

     onclick(event:any) {
      if(event.text == "follow")
      {
        event.text = 'following';
        event.style.backgroundColor = 'green';
      }
        
      else
      {
        event.text = 'follow';
        event.style.backgroundColor = 'red';
      }
       

     }
  

}
