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
  direccion: Observable<Direccion>

  constructor(private routeManager: ActivatedRoute,
    private _servicio: DireccionesService
  ) { }

  ngOnInit(){
    this.routeManager.params.subscribe(params =>{
      if(params['id']){
        this.direccion = this._servicio.getDireccionById(+params['id']);
      }
    })
  }
  
}
