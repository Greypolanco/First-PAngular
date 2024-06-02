import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DireccionComponent } from './direccion/direccion.component';
import { DireccionesDatailComponent } from './direcciones-datail/direcciones-datail.component';
import { DireccionFormComponent } from './direccion-form/direccion-form.component';

const routes: Routes = [
  {
    path: '',
    component: DireccionComponent
  },
  {
    path: 'direccion/:id',
    component: DireccionesDatailComponent
  },
  {
    path: 'redirect/formulario',
    component: DireccionFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DireccionesRoutingModule { }
