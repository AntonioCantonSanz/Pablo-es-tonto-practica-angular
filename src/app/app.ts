import { Component } from '@angular/core';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { Listado } from './listado/listado';

@Component({
  imports: [Footer, Header, Hero, Listado],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
}
