import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private baseurl: string = "https://report-api.somee.com/api/clientes"

  constructor(private http : HttpClient) { }

  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.baseurl).pipe(
      map(response => response),
      catchError(error => {
        console.error(error);
        return of([])
      })
    )
  }

  getClienteById(clienteId: number): Observable<Cliente | undefined> {
    return this.http.get<Cliente>(`${this.baseurl}/${clienteId}`).pipe(
      map(response => response),
      catchError(error => {
        console.error(error);
        return of()
      })
    )
  }

  createCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.baseurl}`, cliente).pipe(
      map(response => response),
      catchError(error => {
        console.error('Error:', error);
        return of();
      })
    );
  }

  editarCliente(cliente: Partial<Cliente>): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.baseurl}`, cliente).pipe(
      map(response => response),
      catchError(error => {
        console.error('Error:', error);
        return of();
      })
    );
  }

}
