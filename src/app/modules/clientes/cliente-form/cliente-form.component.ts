import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.css'
})
export class ClienteFormComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.formulario = this.fb.group({
      name:['',Validators.required],
      lastName:['',Validators.required],
      cedula:['',[Validators.required,Validators.minLength(11),Validators.maxLength(11)]],
      birthDate:[new Date(),Validators.required],
      createAt:[new Date(),Validators.required],
      email:['',[Validators.required, Validators.email]],
      active:[true,Validators.required],
    })
  }

  onSubmit(){
    this.formulario.markAllAsTouched()

    //this.formulario.patchValue()

    console.info('valor del formulario',this.formulario.value)
    console.info('validez del formulario',this.formulario.valid)
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
