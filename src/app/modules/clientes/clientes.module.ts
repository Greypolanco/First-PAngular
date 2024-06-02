import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesDatailComponent } from './clientes-datail/clientes-datail.component';
import { ClienteDireccionComponent } from './cliente-direccion/cliente-direccion.component';
import { ClientesService } from '../../servicios/clientes.service';
import { DireccionesService } from '../../servicios/direcciones.service';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClientesComponent,
    ClientesDatailComponent,
    ClienteDireccionComponent,
    ClienteFormComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    ReactiveFormsModule
  ],
  providers:[
    ClientesService,
    DireccionesService
  ]
})
export class ClientesModule { }
