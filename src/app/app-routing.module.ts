import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthenticationComponent} from "./authentication/authentication.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AuthenticationComponent
  },
  {path: 'home',
  component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





