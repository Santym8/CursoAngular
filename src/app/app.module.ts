import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { CaracteristicasEmpleadoComponent } from './caracteristicas-empleado/caracteristicas-empleado.component';
import { ServicioMensajeService } from './servicio-mensaje.service';
import { EmpleadosService } from './empleados.service';

@NgModule({
  //Componentes
  declarations: [
    AppComponent,
    ListaEmpleadosComponent,
    CaracteristicasEmpleadoComponent
  ],
  //Modulos
  imports: [
    BrowserModule,
    FormsModule
  ],
  //Servicios
  providers: [ServicioMensajeService, EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
