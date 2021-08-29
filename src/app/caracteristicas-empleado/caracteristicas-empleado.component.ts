import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent implements OnInit {

  //Evento a enviar con su tipo de dato
  @Output() caracteristicasEmpleado = new EventEmitter<string>();

  

  constructor() { }

  ngOnInit(): void {
  }

  campoCaracteristica ="";

  
//Envia la informacion de este componente(hijo) al padre
  addCaracteristicas(){
    if(this.campoCaracteristica!=""){
      this.caracteristicasEmpleado.emit(this.campoCaracteristica);
      this.campoCaracteristica ="";
    }
   
  }

}
