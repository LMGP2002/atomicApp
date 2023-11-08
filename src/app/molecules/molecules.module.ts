import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconBComponent } from './icon-b/icon-b.component';
import { AtomsModule } from '../atoms/atoms.module';



@NgModule({
  declarations: [
    IconBComponent
  ],
  imports: [
    CommonModule,
    AtomsModule
  ],
  exports:[
    IconBComponent
  ]
})
export class MoleculesModule { }
