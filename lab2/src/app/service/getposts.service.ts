import { Injectable } from '@angular/core';
import postsarray from '../../assets/posts.json'

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

@Injectable({
  providedIn: 'root'
})
export class GetpostsService {
 
  postcard!:post[];
  constructor()
   {
    this.postcard = postsarray;
    }

    getalldata()
    {
      return this.postcard;
    }
   getpostbyid(id:number)
    {
      return this.postcard.filter(post=>post.id==id)[0];
    }

}
