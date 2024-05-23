import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DireccionesRoutingModule } from './direcciones-routing.module';
import { DireccionComponent } from './direccion/direccion.component';
import { DireccionesDatailComponent } from './direcciones-datail/direcciones-datail.component';


@NgModule({
  declarations: [
    DireccionComponent,
    DireccionesDatailComponent
  ],
  imports: [
    CommonModule,
    DireccionesRoutingModule
  ]
})
export class DireccionesModule { }
