import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  //variables de entorno
  private miUrl:string = environment.miUrl;

  constructor( private http: HttpClient) { }
  
  getHeroes():Observable<Heroe[]>{
   return this.http.get<Heroe[]>(`${this.miUrl}/heroes`)
  } 

  getHeroePorId(id:string):Observable<Heroe>{
   return this.http.get<Heroe>(`${this.miUrl}/heroes/${id}`)
  }

  getSugerencias(termino:string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.miUrl}/heroes?q=${termino}&_limit=6`)
  }
  
  agregarHeroe(heroe:Heroe):Observable<Heroe>{
    return this.http.post<Heroe>(`${this.miUrl}/heroes`, heroe)


  }
  actualizarHeroe(heroe:Heroe):Observable<Heroe>{
    return this.http.put<Heroe>(`${this.miUrl}/heroes/${heroe.id}`, heroe)


  }
  //ponemos any porque al no devolver nada, puede ser cualquier cosa
  borrarHeroe(heroe:Heroe):Observable<any>{
      return this.http.delete<any>(`${this.miUrl}/heroes/${heroe.id}`)
  }


}

