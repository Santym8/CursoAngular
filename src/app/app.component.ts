import { Component } from '@angular/core';
import { Empleado } from './lista-empleados/empleado.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado De Empleados';

  listaEmpleados: Empleado[];

  
  campoNombre: string = "";
  campoApellido: string = "";
  campoCargo: string = "";
  campoSalario: number = 0;

  
  constructor() {
    this.listaEmpleados = [
      new Empleado("Juan", "Diaz", "Presidente", 7000),
      new Empleado("Santy", "Fierro", "Vicepresidente", 6000),
      new Empleado("Pedro", "Alvarez", "Director", 5500),
      new Empleado("Maria", "Diaz", "Directora", 5500),
    ];
  }

  ngOnInit(): void {
  }

  vaciarCampos() {
    this.campoNombre = "";
    this.campoApellido = "";
    this.campoCargo = "";
    this.campoSalario = 0;
  }


  //Validar Datos
  validarCampos():boolean{
    return true;
    
  }


  CrearEmpleado(): void {
    if (this.validarCampos()) {
      let nuevoEmpleado: Empleado = new Empleado(
        this.campoNombre,
        this.campoApellido,
        this.campoCargo,
        this.campoSalario
      );
      this.listaEmpleados.push(nuevoEmpleado);
      this.vaciarCampos();
    }else{
      alert("Datos No Validos");
    }
  }

  EliminarEmpleado(indice: number): void {
    this.listaEmpleados.splice(indice, 1);
  }


  
  

 
}
