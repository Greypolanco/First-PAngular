import { Injectable } from '@angular/core';
import { Direccion } from '../models/direccion';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DireccionesService {
  private baseurl: string = "https://report-api.somee.com/api/addresses"
  constructor( private http : HttpClient) { }

  getDireccion(): Observable<Direccion[]>{
    return this.http.get<Direccion[]>(this.baseurl).pipe(
      map(response => response),
      catchError(error => {
        console.error(error);
        return of([])
      })
    )
  }

  getDireccionById(addressId: number): Observable<Direccion | undefined> {
    return this.http.get<Direccion>(`${this.baseurl}/${addressId}`).pipe(
      map(response => response),
      catchError(error => {
        console.error(error);
        return of()
      })
    )
  }

  createDireccion(direccion: Direccion): Observable<Direccion> {
    return this.http.post<Direccion>(`${this.baseurl}`, direccion).pipe(
      map(response => response),
      catchError(error => {
        console.error('Error:', error);
        return of();
      })
    );
  }

  editarDireccion(direccion: Partial<Direccion>): Observable<Direccion> {
    return this.http.post<Direccion>(`${this.baseurl}`, direccion).pipe(
      map(response => response),
      catchError(error => {
        console.error('Error:', error);
        return of();
      })
    );
  }

  
}
