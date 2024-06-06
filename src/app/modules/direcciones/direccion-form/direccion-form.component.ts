import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { error } from 'node:console';
import { Cliente } from '../../../models/cliente';
import { ClientesService } from '../../../servicios/clientes.service';
import { ActivatedRoute } from '@angular/router';
import { Direccion } from '../../../models/direccion';
import { DireccionesService } from '../../../servicios/direcciones.service';

@Component({
  selector: 'app-direccion-form',
  templateUrl: './direccion-form.component.html',
  styleUrl: './direccion-form.component.css'
})
export class DireccionFormComponent {
  formulario : FormGroup;
  clientes: Cliente[];
  direccion: Direccion;  

  constructor(
    private fb: FormBuilder,
    private _clientesService: ClientesService,
    private routerManager: ActivatedRoute,
    private _servicio: DireccionesService
  ){}

  ngOnInit(){
    this.formulario = this.fb.group({
      alias:['',Validators.required],
      street:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      zipCode:['',Validators.required],
      country:['',Validators.required],
      createAt:['',Validators.required],
      active:['',Validators.required],
      clienteId:[0,Validators.required],
    });

    this.getClientes();

    this.routerManager.params.subscribe(params =>{
      if(params['id']){
        this._servicio.getDireccionById(+params['id']).subscribe({
          next: (value) => {
            this.direccion = (value);
            this.formulario.patchValue(this.direccion);
          },
          error: (error) => {
            console.log('Error al obtener la dirección', error);
          },
        })
      }
    })
  }
  
  onSubmit(){
    this.formulario.markAllAsTouched()
    console.info('valor del formulario',this.formulario.value)
    console.info('validez del formulario',this.formulario.valid)
    this.formulario.markAllAsTouched();
    if (this.formulario.valid) {
      const direccion = this.formulario.value;
      if (this.direccion) {
        this._servicio.editarDireccion(direccion).subscribe(() => {
          alert('Direccion actualizada');
        });
      } else {
        this._servicio.createDireccion(direccion).subscribe(() => {
          alert('Cliente creado');
        });
      }
    }
  }

  getClientes(){
    this._clientesService.getClientes().subscribe({
      next: (value) =>{
        this.clientes = value
      },
      error: (error) =>{
        console.error(error);
      }
    })
  }

  public getError(controlName: string, name: string){

    if(this.formulario.get(controlName) != null
    && this.formulario.get(controlName).touched
    && this.formulario.get(controlName).invalid){
      if(this.formulario.get(controlName).hasError('required')){
        return `${name} es obligatorio`
      }
    }
    return '';
  }

}
