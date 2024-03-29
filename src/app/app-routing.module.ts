import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import {AuthGuard} from './guards/auth-guard';
import {RedirectGuard} from './guards/redirect-guard';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AuthenticationComponent,
    canActivate: [RedirectGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' , useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}





