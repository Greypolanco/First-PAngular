import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesDatailComponent } from './clientes-datail/clientes-datail.component';
import { ClienteDireccionComponent } from './cliente-direccion/cliente-direccion.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: 'clientes',
    pathMatch: 'full'
  },
  {
    path: 'clientes',
    component:ClientesComponent
  },
  {
    path: 'cliente/:id',
    component:ClientesDatailComponent
  
  },
  {
    path: 'direcciones/:id',
    component:ClienteDireccionComponent
  },
  {
    path: 'clientes/form',
    component: ClienteFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
