import { LoggingService } from './../LoggingService.service';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  //providers: [LoggingService]
})
export class FormularioComponent {
  @Output() personaCreada =  new EventEmitter<Persona>() //asegurarse que s eimporta del paquete core angular
  @ViewChild('nombreRef') nombreInput: ElementRef
  @ViewChild('apellidoRef') apellidoInput: ElementRef

  constructor(private loggingService: LoggingService) {}
  //nombreInput: string = '';
  //apellidoInput: string = '';
  // agregarPersona()  two way binding
  // agregarPersona(nombreInput:HTMLInputElement, apellidoInput:HTMLInputElement) { local reference
   agregarPersona() {
    let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    //this.personas.push(persona1);
    this.personaCreada.emit(persona1)
    this.loggingService.enviaMensajeConsola('persona' + persona1.nombre + persona1.apellido)
  }
}
