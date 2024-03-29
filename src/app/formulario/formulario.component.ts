import { LoggingService } from './../LoggingService.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  //providers: [LoggingService]
})
export class FormularioComponent {
  // @Output() personaCreada =  new EventEmitter<Persona>() //asegurarse que s eimporta del paquete core angular
  @ViewChild('nombreRef') nombreInput: ElementRef
  @ViewChild('apellidoRef') apellidoInput: ElementRef

  constructor(private personaService: PersonaService) {
    this.personaService.saludar.subscribe(
      (indice:number) => alert("indice es: " + indice)
    )
  }
  //nombreInput: string = '';
  //apellidoInput: string = '';
  // agregarPersona()  two way binding
  // agregarPersona(nombreInput:HTMLInputElement, apellidoInput:HTMLInputElement) { local reference
   agregarPersona() {
    let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    this.personaService.agregarPersona(persona1)
    //this.personas.push(persona1);
  }
}
