import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //para peticiones http hay que meter el modulo http
  constructor(private http:HttpClient ) { }

  private miUrl:string = environment.miUrl;


//esta propiedad, si tiene algun valor nos dejara hacer login
  private _auth:Auth | undefined;

  get auth():Auth
  {return{...this._auth!}}

  verificaAutenticacion():Observable<boolean>{

    if(!localStorage.getItem('id')){

      return of(false);
    }
    //map transforma cosas, como el observable que tenemos ahi
    return this.http.get<Auth>(`${ this.miUrl}/usuario/1`)
    .pipe(map(auth=>{
      this._auth = auth
      return true;
    }));

  }

  login(){

    return this.http.get<Auth>(`${ this.miUrl}/usuario/1`)
    .pipe(
          tap(resp=> this._auth = resp),
          //setitem('nombre que le vamos a dar', 'argumento que en este caso seria el id, podria ser otra cosa')
          tap(resp=> localStorage.setItem('id', resp.id)));
  }

  logout(){
    this._auth = undefined;
  }
}
