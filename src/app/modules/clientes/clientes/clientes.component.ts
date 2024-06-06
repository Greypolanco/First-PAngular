import { Component } from '@angular/core';

import { Cliente } from '../../../models/cliente';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ClientesService } from '../../../servicios/clientes.service';
import { error } from 'console';

@Component({
  selector: 'app-clientes',
  standalone: false, // permite que un componente puede representar un todo dentro de una aplicacion
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  listaCliente: Cliente[];

  constructor(
    private _servicio: ClientesService
  ){}

  ngOnInit() {
    this._servicio.getClientes().subscribe({
      next: (value) => {
        this.listaCliente = value
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
