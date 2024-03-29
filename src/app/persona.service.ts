import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';
import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class PersonaService {
  constructor(private loggingService: LoggingService){}

  personas: Persona[] = [
    new Persona('Juan', 'PErez'),
    new Persona('Laura', 'Juarez'),
    new Persona('Karla', 'Lara')
  ]

  saludar = new EventEmitter<number>()

  agregarPersona(persona: Persona){
    this.personas.push(persona)
    this.loggingService.enviaMensajeConsola('Persona: ' + persona.nombre + ' ' + persona.apellido)
  }
}
