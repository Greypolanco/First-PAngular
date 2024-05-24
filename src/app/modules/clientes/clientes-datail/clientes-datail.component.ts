import { Component } from '@angular/core';
import { Cliente } from '../../../models/cliente';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientesService } from '../../../servicios/clientes.service';

@Component({
  selector: 'app-clientes-datail',
  standalone: false,
  templateUrl: './clientes-datail.component.html',
  styleUrl: './clientes-datail.component.css'
})
export class ClientesDatailComponent {

  cliente: Observable<Cliente>;

  constructor(private routerManager : ActivatedRoute,
    private _servicio: ClientesService
  ){}

  ngOnInit(){
    this.routerManager.params.subscribe(params =>{
      if(params['id']){
        this.cliente = this._servicio.getClienteById(+params['id']);
      }
    })
  }
}
