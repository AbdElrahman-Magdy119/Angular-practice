import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ProfileComponent } from './component/profile/profile.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'profile',component: ProfileComponent},
  {path:'profile/:id',component: ProfileComponent},
  {path:'profile?value=val',component: ProfileComponent},
  {path:'form',component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
