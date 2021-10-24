import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from 'src/app/empleados.service';
import { Empleado } from 'src/app/lista-empleados/empleado.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Listado De Empleados';

  listaEmpleados: Empleado[];


  campoNombre: string = "";
  campoApellido: string = "";
  campoCargo: string = "";
  campoSalario: number = 0;


  //Inyectar el servicio en el constructor
  constructor(private empleadoS: EmpleadosService) {
    
  }

  ngOnInit(): void {
    this.listaEmpleados = this.empleadoS.lista;

  }

  vaciarCampos() {
    
    this.campoNombre = "";
    this.campoApellido = "";
    this.campoCargo = "";
    this.campoSalario = 0;
  }




  //Validar Datos
  validarCampos(): boolean {
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

      this.empleadoS.agregarEmpleado(nuevoEmpleado);
      this.vaciarCampos();
    } else {
      alert("Datos No Validos");
    }

  }


}
