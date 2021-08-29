import { Injectable } from '@angular/core';
import { Empleado } from './lista-empleados/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  lista: Empleado[];
  constructor() {
    this.lista = [
      new Empleado("Juan", "Diaz", "Presidente", 7000),
      new Empleado("Santy", "Fierro", "Vicepresidente", 6000),
      new Empleado("Pedro", "Alvarez", "Director", 5500),
      new Empleado("Maria", "Diaz", "Directora", 5500),
    ];
  }


  agregarEmpleado(nuevoEmpleado: Empleado) {
    this.lista.push(nuevoEmpleado);
  }

  eliminarE(indice: number) {
    this.lista.splice(indice, 1);
  }


}
