import { Routes } from '@angular/router';

//archivo central

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/clientes/clientes.module').then(m => m.ClientesModule)
  },
  {
    path:'',
    loadChildren: () => import('./modules/direcciones/direcciones.module').then(m => m.DireccionesModule)
  }
];
