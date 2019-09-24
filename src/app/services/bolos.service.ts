import { Injectable } from "@angular/core";
import { Bolos } from "../models/bolos";

@Injectable({
  providedIn: "root"
})
export class BolosService {
  constructor() {}

  public getBolos(): Bolos[] {
    const bolos: Bolos[] = [
    { id: 'profiteroles', nome: 'Chocolate profiteroles', preco: 18.9, url: '../assets/img/profiteroles.jpg'},
    { id: 'caneles', nome: 'Canelés', preco: 16.90, url: '../assets/img/caneles.jpg'},
    { id: 'framboisier', nome: 'Chocolate framboisier', preco: 19.99, url: '../assets/img/framboisier.jpg'},
    { id: 'fraisiers', nome: 'Strawberry and elderflower fraisiers', preco: 29.90, url: '../assets/img/fraisiers.jpg' },
    { id: 'paris_brest', nome: 'Classic Paris-Brest', preco: 22.99, url: '../assets/img/paris_brest.jpg'},
    { id: 'mille_feuille', nome: 'Strawberry mille-feuille', preco: 20.90,url: '../assets/img/mille_feuille.jpg' },
    { id: 'souffle', nome: 'Chocolate soufflé', preco: 32.90, url: '../assets/img/souffle.jpg' }
  ];

    return bolos;
  }
}
