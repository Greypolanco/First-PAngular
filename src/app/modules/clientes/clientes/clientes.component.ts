import { Component } from '@angular/core';

import { Cliente } from '../../../models/cliente';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ClientesService } from '../../../servicios/clientes.service';

@Component({
  selector: 'app-clientes',
  standalone: false, // permite que un componente puede representar un todo dentro de una aplicacion
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  listaCliente: Observable<Cliente[]>

  constructor(
    private _servicio: ClientesService
  ){}

  ngOnInit() {
    this.listaCliente = this._servicio.getClientes();
  }
}
