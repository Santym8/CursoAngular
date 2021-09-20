import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { CaracteristicasEmpleadoComponent } from './caracteristicas-empleado/caracteristicas-empleado.component';
import { ServicioMensajeService } from './servicio-mensaje.service';
import { EmpleadosService } from './empleados.service';
import { HomeComponent } from './home/home/home.component';
import { ProyectosComponent } from './proyectos/proyectos/proyectos.component';
import { QuienesComponent } from './quienes/quienes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[
  {path:'', component:HomeComponent},
  {path:'proyectos/', component:ProyectosComponent},
  {path:'quienes-somos/', component:QuienesComponent},
  {path:'contacto/', component:ContactoComponent},
]

@NgModule({
  //Componentes
  declarations: [
    AppComponent,
    ListaEmpleadosComponent,
    CaracteristicasEmpleadoComponent,
    HomeComponent,
    ProyectosComponent,
    QuienesComponent,
    ContactoComponent
  ],
  //Modulos
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  //Servicios
  providers: [ServicioMensajeService, EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
