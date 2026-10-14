import { Component } from '@angular/core';

export interface Pelicula {
  id: number;
  titulo: string;
  anio: number;
  director: string;
  subgenero: string;
  sinopsis: string;
  imagen: string;
  sesion: string;
}

export const peliculas: Pelicula[] = [
  {
    id: 1,
    titulo: 'Nosferatu',
    anio: 1922,
    director: 'F. W. Murnau',
    subgenero: 'Expresionismo gótico',
    sinopsis:
      'Un agente inmobiliario viaja a Transilvania y despierta la amenaza del conde Orlok, una figura vampírica que extiende la peste y el terror.',
    imagen: 'nosferatu.svg',
    sesion: 'Viernes 18:00',
  },
  {
    id: 2,
    titulo: 'Psicosis',
    anio: 1960,
    director: 'Alfred Hitchcock',
    subgenero: 'Suspense psicológico',
    sinopsis:
      'Una huida improvisada conduce a un motel aislado donde los secretos de Norman Bates transforman un crimen en una pesadilla inquietante.',
    imagen: 'psicosis.svg',
    sesion: 'Viernes 20:00',
  },
  {
    id: 3,
    titulo: 'El Exorcista',
    anio: 1973,
    director: 'William Friedkin',
    subgenero: 'Posesión demoníaca',
    sinopsis:
      'La investigación médica de una madre se convierte en un ritual extremo cuando la posesión de su hija exige una respuesta sobrenatural.',
    imagen: 'el-exorcista.svg',
    sesion: 'Sábado 18:00',
  },
  {
    id: 4,
    titulo: 'Halloween',
    anio: 1978,
    director: 'John Carpenter',
    subgenero: 'Slasher',
    sinopsis:
      'Michael Myers escapa de un hospital psiquiátrico y vuelve a su pueblo para acechar a Laurie Strode durante una noche de otoño.',
    imagen: 'halloween.svg',
    sesion: 'Sábado 20:00',
  },
  {
    id: 5,
    titulo: 'Pesadilla en Elm Street',
    anio: 1984,
    director: 'Wes Craven',
    subgenero: 'Horror onírico',
    sinopsis:
      'Un asesino que ataca en sueños convierte el descanso en el lugar más peligroso del barrio y arrastra a los jóvenes a un pánico compartido.',
    imagen: 'pesadilla-elm-street.svg',
    sesion: 'Domingo 18:00',
  },
  {
    id: 6,
    titulo: 'El Resplandor',
    anio: 1980,
    director: 'Stanley Kubrick',
    subgenero: 'Aislamiento y locura',
    sinopsis:
      'Un hotel cerrado por la nieve intensifica la caída mental de una familia hasta convertir el encierro en una espiral de violencia y presencias inquietantes.',
    imagen: 'el-resplandor.svg',
    sesion: 'Domingo 20:00',
  },
];

@Component({
  imports: [],
  selector: 'app-listado',
  styleUrl: './listado.css',
  templateUrl: './listado.html',
})
export class Listado {}
