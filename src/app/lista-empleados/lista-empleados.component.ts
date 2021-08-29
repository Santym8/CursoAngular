import { Component, Input, OnInit } from '@angular/core';
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
  @Input() EliminarEmpleado:any;      //esto es una funcion
  
  caracteristicas:string[] = [];

  agregarCaracteristica(nuevaCaracteristica:string){
    this.caracteristicas.push(nuevaCaracteristica);
  }

  eliminar(i:number){
    this.caracteristicas.splice(i, 1);
  }
  

  ngOnInit(): void {
  }

}
