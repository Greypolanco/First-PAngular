import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesDatailComponent } from './clientes-datail/clientes-datail.component';
import { ClienteDireccionComponent } from './cliente-direccion/cliente-direccion.component';
import { ClientesService } from '../../servicios/clientes.service';
import { DireccionesService } from '../../servicios/direcciones.service';


@NgModule({
  declarations: [
    ClientesComponent,
    ClientesDatailComponent,
    ClienteDireccionComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ],
  providers:[
    ClientesService,
    DireccionesService
  ]
})
export class ClientesModule { }
