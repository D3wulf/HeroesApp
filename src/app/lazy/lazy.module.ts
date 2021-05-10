import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

// personal
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { LazyComponent } from './pages/lazy/lazy.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { LazyRoutingModule } from './lazy-routing.module';
import { MaterialModule } from '../material/material.module';
import { HeroeTarjetaComponentComponent } from './components/heroe-tarjeta-component/heroe-tarjeta-component.component';
import { imagen } from './pipes/imagen.pipe';
import { FormsModule } from '@angular/forms';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    LazyComponent,
    HomeComponent,
    ListadoComponent,
    HeroeTarjetaComponentComponent,
    imagen,
    ConfirmarComponent
    
  ],
  imports: [
    CommonModule,
    LazyRoutingModule,
    MaterialModule,
    FlexLayoutModule, FormsModule
  ]
})
export class LazyModule { }
