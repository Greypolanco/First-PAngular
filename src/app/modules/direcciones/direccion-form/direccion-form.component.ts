import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { error } from 'node:console';
import { Cliente } from '../../../models/cliente';
import { ClientesService } from '../../../servicios/clientes.service';

@Component({
  selector: 'app-direccion-form',
  templateUrl: './direccion-form.component.html',
  styleUrl: './direccion-form.component.css'
})
export class DireccionFormComponent {
  formulario : FormGroup;
  clientes: Cliente[];

  constructor(
    private fb: FormBuilder,
  private _clientesService: ClientesService){}

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
  }
  
  onSubmit(){
    this.formulario.markAllAsTouched()

    console.info('valor del formulario',this.formulario.value)
    console.info('validez del formulario',this.formulario.valid)
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
