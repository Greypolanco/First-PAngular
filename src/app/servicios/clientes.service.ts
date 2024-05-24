import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  clientes : Cliente[]= [
    {
      clienteId:0, 
      name:"Grey", 
      lastName:"Polanco", 
      cedula:"000-0000000-0", 
      birthDate: new Date("2003-01-08"),
      createAT: new Date("2021-01-08"),
      email:"greilyn123@gmail.com",
      active:true,
      addresses: []
    },
    {
      clienteId:1, 
      name:"Jasson", 
      lastName:"Tejada", 
      cedula:"000-0000000-0", 
      birthDate: new Date("2003-02-20"),
      createAT: new Date("2021-01-08"),
      email:"levid123@gmail.com",
      active:false,
      addresses: []
    },
    {
      clienteId:2, 
      name:"Joseph", 
      lastName:"Garcia", 
      cedula:"000-0000000-0", 
      birthDate: new Date("2003-03-24"),
      createAT: new Date("2021-01-08"),
      email:"Joseph123@gmail.com",
      active:false,
      addresses: []
    },
    {
      clienteId:3, 
      name:"Jorge", 
      lastName:"Toribio", 
      cedula:"000-0000000-0", 
      birthDate: new Date("2003-04-27"),
      createAT: new Date("2021-01-08"),
      email:"jorge123@gmail.com",
      active:false,
      addresses: []
    },
    {
      clienteId:4, 
      name:"Carolina", 
      lastName:"Brito", 
      cedula:"000-0000000-0", 
      birthDate: new Date("2003-01-05"),
      createAT: new Date("2021-01-08"),
      email:"caro123@gmail.com",
      active:false,
      addresses: []
    },
  ]

  constructor() { }

  getClientes(): Observable<Cliente[]>{
    return of(this.clientes);
  }

  getClienteById(clienteId: number): Observable<Cliente | undefined> {
    console.log("hola")
    const cliente = this.clientes.find(
      (cliente) => cliente.clienteId === clienteId
    );
    return of(cliente);
  }

  postCliente(){}
}
