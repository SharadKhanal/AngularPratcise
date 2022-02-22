import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TableComponent } from './table/table.component';
import { TempelateFormComponent } from './tempelate-form/tempelate-form.component';
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
    path:'user/:id/class/:id',
    component:UserComponent
  },{
    path:'reactiveform',
    component:ReactiveFormComponent
  },
  {
    path:'table',
    component:TableComponent
  },
  {
    path:'tempelateform',
    component:TempelateFormComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
