import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DireccionesRoutingModule } from './direcciones-routing.module';
import { DireccionComponent } from './direccion/direccion.component';
import { DireccionesDatailComponent } from './direcciones-datail/direcciones-datail.component';
import { DireccionesService } from '../../servicios/direcciones.service';
import { ReactiveFormsModule } from '@angular/forms';
import { DireccionFormComponent } from './direccion-form/direccion-form.component';


@NgModule({
  declarations: [
    DireccionComponent,
    DireccionesDatailComponent,
    DireccionFormComponent
  ],
  imports: [
    CommonModule,
    DireccionesRoutingModule,
    ReactiveFormsModule
  ],
  providers:[
    DireccionesService
  ]
})
export class DireccionesModule { }
