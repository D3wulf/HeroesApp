import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanLoad, CanActivate {

  constructor( private authService: AuthService,  
                private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean>  | boolean  {

    //   if(this.authService.auth.id){
    //     return true;
    //   }

    // DEJAMOS ABIERTA LA APP
      
    return true;

    // return this.authService.verificaAutenticacion()
    // .pipe(
    //       tap(estaAutenticado =>  { 
    //         if(!estaAutenticado)  {
    //               this.router.navigate(['./auth/login']);
    //           }
    //         })
    // );


  } 

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean>  | boolean  {


    //   return this.authService.verificaAutenticacion()
    // .pipe(
    //       tap(estaAutenticado =>  { 
    //         if(!estaAutenticado)  {
    //               this.router.navigate(['./auth/login']);
    //           }
    //         })
    // );


    //   // Aqui iria la lógica del servicio inyectado
    //   // si esto existe, dejalo pasar
    //   if(this.authService.auth.id){
    //     return true;
    //   }


    // COMO NO SE HA HECHO NADA MAS SOBRE LA APP, CON ESTO LO DEJO ABIERTO
     return true;
  }
}
