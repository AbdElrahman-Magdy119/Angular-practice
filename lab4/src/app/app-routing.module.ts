import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'user/:id',component:UserComponent},
  {path: 'post/:id',component:PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
