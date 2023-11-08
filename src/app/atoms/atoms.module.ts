import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconoComponent } from './icono/icono.component';
import { TituloComponent } from './titulo/titulo.component';



@NgModule({
  declarations: [
    IconoComponent,
    TituloComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    IconoComponent,
    TituloComponent
  ]
})
export class AtomsModule { }
