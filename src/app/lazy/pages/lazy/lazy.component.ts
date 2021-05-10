import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { switchMap } from 'rxjs/operators';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styles: [
    `
    img {
      width:100%;
      border-radius:5px;
    }
    
    
    `

  ]
})
export class LazyComponent implements OnInit {

  heroe!: Heroe;

  constructor( 
              //las rutas por id de los heroes
              private ActivatedRoute:ActivatedRoute,
              //los heroes, la suscripcion
              private heroesService:HeroesService,
              //la ruta para volver al listado
              private router:Router
              
              ) { }

  ngOnInit(): void {

    this.ActivatedRoute.params

    .pipe(switchMap( ({id})=> this.heroesService.getHeroePorId(id)))
    
    
    .subscribe(heroe=>this.heroe = heroe);
  }
  volver(){

    this.router.navigate(['/lazy/listado'])
  }

}
