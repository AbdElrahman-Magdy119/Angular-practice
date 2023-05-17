import { Component } from '@angular/core';
import user from '../../../assets/posts.json'
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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    posts:post[];
    check!:any;
    newpost!:post[]
    constructor() {
         this.posts=user;
         this.newpost=this.posts;
    }
    getdata(event:any)
    {
    
        
      
            this.newpost =  this.posts.filter((elm) => elm.creator.name ==event.value) 
      
    }
    

    
}

