import { Persona } from './persona.model';
export class PersonaService {
  personas: Persona[] = [
    new Persona('Juan', 'PErez'),
    new Persona('Laura', 'Juarez'),
    new Persona('Karla', 'Lara')
  ]

  agregarPersona(persona: Persona){
    this.personas.push(persona)
  }
}
