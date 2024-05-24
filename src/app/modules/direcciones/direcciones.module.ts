import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DireccionesRoutingModule } from './direcciones-routing.module';
import { DireccionComponent } from './direccion/direccion.component';
import { DireccionesDatailComponent } from './direcciones-datail/direcciones-datail.component';
import { DireccionesService } from '../../servicios/direcciones.service';


@NgModule({
  declarations: [
    DireccionComponent,
    DireccionesDatailComponent
  ],
  imports: [
    CommonModule,
    DireccionesRoutingModule
  ],
  providers:[
    DireccionesService
  ]
})
export class DireccionesModule { }
