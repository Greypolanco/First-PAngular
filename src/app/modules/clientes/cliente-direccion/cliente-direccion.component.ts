import { Component } from '@angular/core';
import { Direccion } from '../../../models/direccion';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { DireccionesService } from '../../../servicios/direcciones.service';

@Component({
  selector: 'app-cliente-direccion',
  standalone: false,
  templateUrl: './cliente-direccion.component.html',
  styleUrl: './cliente-direccion.component.css'
})
export class ClienteDireccionComponent {
  
  direccionesFiltradas: Observable<Direccion[]>;

  constructor(private routerManager : ActivatedRoute,
    private _servicio: DireccionesService
  ){}

  ngOnInit(){
    this.routerManager.params.subscribe((params) => {
      const clienteId = params['id'];
      if (clienteId) {
        this.direccionesFiltradas = this._servicio.getDireccion().pipe(
            map((direcciones: Direccion[]) =>
              direcciones.filter((d) => d.clienteId == clienteId)
            )
          );
      }
    });
  }

}
