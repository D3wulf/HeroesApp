import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AuthGuard } from './auth/guards/auth.guard';


const routes : Routes= [
  {
    path: 'auth',

    //Clave del lazyload, no anotar una a una las hijas, hacer una carga del modulo entero
    loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule),
    
  },{
    path: 'lazy',

    //Clave del lazyload, no anotar una a una las hijas, hacer un acarga del modulo entero
    loadChildren: ()=> import('./lazy/lazy.module').then(m => m.LazyModule),
    //canload recibe un argumento, el guard
    canLoad: [AuthGuard],
    canActivate:[AuthGuard]

  },

  {    
    path: '404',
    component: ErrorPageComponent

  },{

    path: '**',
    //component:ErrorPageComponent
    redirectTo:'404'
  }



]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[ RouterModule]
})
export class AppRoutingModule { }
