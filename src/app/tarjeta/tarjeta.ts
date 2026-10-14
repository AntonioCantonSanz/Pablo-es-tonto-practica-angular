import { Component, Input } from '@angular/core';
import { type Pelicula } from '../listado/listado';

@Component({
  imports: [],
  selector: 'app-tarjeta',
  styleUrl: './tarjeta.css',
  templateUrl: './tarjeta.html',
})
export class Tarjeta {
  @Input({ required: true })
  pelicula!: Pelicula;
}
