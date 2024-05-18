import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ClientesComponent } from '../app/modules/clientes/clientes/clientes.component';
import { DireccionComponent } from './modules/direcciones/direccion/direccion.component';
import { ClientesModule } from './modules/clientes/clientes.module';
import { DireccionesModule } from './modules/direcciones/direcciones.module';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ClientesModule, DireccionesModule, RouterModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-project';
}
