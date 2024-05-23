import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DireccionComponent } from './direccion/direccion.component';
import { DireccionesDatailComponent } from './direcciones-datail/direcciones-datail.component';

const routes: Routes = [
  {
    path: 'direcciones',
    component: DireccionComponent,
  },
  {
    path: 'direccion/:id',
    component:DireccionesDatailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DireccionesRoutingModule { }
