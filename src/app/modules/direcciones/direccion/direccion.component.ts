import { Component } from '@angular/core';
import { Direccion } from '../../../models/direccion';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { DireccionesService } from '../../../servicios/direcciones.service';

@Component({
  selector: 'app-direccion',
  standalone: false,
  templateUrl: './direccion.component.html',
  styleUrl: './direccion.component.css'
})
export class DireccionComponent {
  listaDireccion: Observable<Direccion[]>

  constructor(
    private _servicio: DireccionesService
  ){}

  ngOnInit(){
    this.listaDireccion = this._servicio.getDireccion();
  }

}
