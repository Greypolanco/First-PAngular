import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-direccion-form',
  templateUrl: './direccion-form.component.html',
  styleUrl: './direccion-form.component.css'
})
export class DireccionFormComponent {
  formulario : FormGroup;

  constructor(private fb: FormBuilder){}

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
    })
  }

  onSubmit(){
    this.formulario.markAllAsTouched()

    console.info('valor del formulario',this.formulario.value)
    console.info('validez del formulario',this.formulario.valid)
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
