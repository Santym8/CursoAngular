import { Component, Input, OnInit } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  @Input() empleado:Empleado; //Esto es una variable
  @Input() listaEmpleados:Empleado[]; 
  @Input() i : number;
  
  
  caracteristicas:string[] = [];

  agregarCaracteristica(nuevaCaracteristica:string){
    this.caracteristicas.push(nuevaCaracteristica);
  }

  eliminar(i:number){
    this.caracteristicas.splice(i, 1);
  }

  constructor(private empleadoS: EmpleadosService){}

  
  EliminarEmpleado(i: number): void {
    
    this.empleadoS.eliminarE(i);
  }
  

  ngOnInit(): void {
  }

}
