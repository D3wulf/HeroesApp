import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
    img{
      width:100%;
      border-radius:5px;
    }
    `
  ]
})
export class AgregarComponent implements OnInit {

  constructor( private heroesService: HeroesService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private snackbar: MatSnackBar,
    public dialog: MatDialog ) { }

  ngOnInit(): void {

    if(!this.router.url.includes('editar')){

    return;
    }

    this.activatedRoute.params
    //esto con el id (desestructurado)
    .pipe( switchMap(({id})=>this.heroesService.getHeroePorId(id)))

    //aqui lo que se recibe es el heroe 
    .subscribe( heroe=> this.heroe= heroe)
  } 


  //esto lo rellenamos con los inputs
  heroe: Heroe = {

      superhero:'',
      alter_ego:'',
      characters:'',
      first_appearance:'',
      publisher:Publisher.DCComics,
      alt_img: '',

  }

  publishers = [{

    id: 'DC Comics',
    desc: 'DC - Comics'
  },
  {

    id: 'Marvel Comics',
    desc: 'Marvel - Comics'
  }
  ]

  guardar(){

          if(this.heroe.superhero.trim().length === 0 ){
            return;
          }

          if(this.heroe.id){
            //Actualizar
              this.heroesService.actualizarHeroe(this.heroe)
              .subscribe(resp=> this.mostrarSnackbar('Heroe Actualizado'));
              

          }else {
            //Crear
            this.heroesService.agregarHeroe(this.heroe)
              .subscribe( resp=>{
              this.router.navigate(['/lazy/editar',resp.id]);
              this.mostrarSnackbar('Heroe Creado');
             })
          } 
        }
  borrar(){

    const dialog = this.dialog.open(ConfirmarComponent, {
      width:'250px',
      data: this.heroe
    });

    dialog.afterClosed().subscribe(resp=> {

      if(resp){

        this.heroesService.borrarHeroe(this.heroe)
        .subscribe(resp=> {
        this.router.navigate(['/lazy/listado']);
      });


      }


    })

    /*if(this.heroe.superhero.trim().length === 0 ){
      return;
    }


    if(this.heroe.id){

      this.heroesService.borrarHeroe(this.heroe)
      .subscribe(resp=> {
        this.router.navigate(['/lazy/listado']);
      })
      

    }*/

  }
  mostrarSnackbar(mensaje:string){

    this.snackbar.open( mensaje, 'ok', {

        duration:2500
    });
  }
  

}
