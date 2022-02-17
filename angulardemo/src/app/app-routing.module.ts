import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
path:'',
redirectTo:'/home',
pathMatch:'full'
  },

  {
    path:'home/:id',
    component:HomeComponent
  },
  {
    path:'another-page',
    component:HomeComponent
  },
  {
    path:'user/:id/class/:paramClass',
    component:UserComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
