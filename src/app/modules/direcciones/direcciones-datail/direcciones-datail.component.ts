import { Component } from '@angular/core';
import { Direccion } from '../../../models/direccion';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DireccionesService } from '../../../servicios/direcciones.service';

@Component({
  selector: 'app-direcciones-datail',
  standalone: false,
  templateUrl: './direcciones-datail.component.html',
  styleUrl: './direcciones-datail.component.css'
})
export class DireccionesDatailComponent {
  direccion: Direccion;

  constructor(private routeManager: ActivatedRoute,
    private _servicio: DireccionesService
  ) { }

  ngOnInit(){
    this.routeManager.params.subscribe(params =>{
      if(params['id']){
        this._servicio.getDireccionById(+params['id']).subscribe({
          next: (value) => {
            this.direccion = (value);
          },
          error: (error) => {
            console.log('Error al obtener la dirección', error);
          },
        })
      }
    })
  }
  
}
