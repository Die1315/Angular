import { Injectable } from "@angular/core";

@Injectable()
export class LoggingService {
  enviaMensajeConsola(mensaje: string){
    console.log(mensaje)
  }
}
