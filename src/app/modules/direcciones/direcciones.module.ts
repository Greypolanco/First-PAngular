import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DireccionesRoutingModule } from './direcciones-routing.module';
import { DireccionComponent } from './direccion/direccion.component';


@NgModule({
  declarations: [
    DireccionComponent
  ],
  imports: [
    CommonModule,
    DireccionesRoutingModule
  ]
})
export class DireccionesModule { }
