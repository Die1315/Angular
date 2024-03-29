import { LoggingService } from './LoggingService.service';
import { Component } from '@angular/core';
import { Persona } from './persona.model';
import { PersonaService } from './persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
   private personasService: PersonaService
  ) {}

  ngOnInit(){
    this.personas = this.personasService.personas
  }

  titulo = 'Listado de personas';
  personas: Persona[] = [];

}
