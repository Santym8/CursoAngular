import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioMensajeService {

  constructor() { }


  muestraMensaje(mensaje:string){
    alert(mensaje);
  }
}
