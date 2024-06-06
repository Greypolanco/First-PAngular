import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from '../../../servicios/clientes.service';
import { Cliente } from '../../../models/cliente';



@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.css'
})
export class ClienteFormComponent {
  formulario: FormGroup;
  cliente : Cliente;


  constructor(private fb: FormBuilder, 
    private routeManager: ActivatedRoute,
    private _servicio: ClientesService){}

  ngOnInit(){
    this.formulario = this.fb.group({
      name:['',Validators.required],
      lastName:['',Validators.required],
      cedula:['',[Validators.required,Validators.minLength(11),Validators.maxLength(11)]],
      birthDate:[new Date(),Validators.required],
      createdAt:[new Date(),Validators.required],
      email:['',[Validators.required, Validators.email]],
      active:[true,Validators.required],
    })
    
    this.routeManager.params.subscribe((params) => {
      if (params['id']) {
        this._servicio.getClienteById(+params['id']).subscribe({
          next: (value) => {
            this.formulario.patchValue(value);
          },
          error: (error) => {
            console.log('Error al obtener el cliente', error);
          },
        });
      }
    });
  }

  onSubmit(){
    this.formulario.markAllAsTouched();
    console.info('Valor del formulario: ', this.formulario.value);
    console.info('Validez del formulario: ', this.formulario.valid);
    if (this.formulario.valid) {
      const cliente = this.formulario.value;
      if (this.cliente) {
        this._servicio.editarCliente(cliente).subscribe(() => {
          alert('Cliente actualizado');
        });
      } else {
        this._servicio.createCliente(cliente).subscribe(() => {
          alert('Cliente creado');
        });
      }
    }
  }

  public getError(controlName: string, name: string){
    if(this.formulario.get(controlName) != null
    && this.formulario.get(controlName).touched
    && this.formulario.get(controlName).invalid){
      if(this.formulario.get(controlName).hasError('required')){
        return `${name} es obligatorio`
      }else if(this.formulario.get(controlName).hasError('minlength')){
        return `el campo ${name} debe tener al menos 11 caracteres`
      }else if(this.formulario.get(controlName).hasError('maxlength')){
        return `el campo ${name} debe tener maximo 11 caracteres`
      }
    }
    return '';
  }
}
