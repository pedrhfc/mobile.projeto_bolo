import { Injectable } from "@angular/core";
import { Bolos } from "../models/bolos";

@Injectable({
  providedIn: "root"
})
export class BolosService {
  constructor() {}

  public getBolos(): Bolos[] {
    const bolos: Bolos[] = [
    { id: 'profiteroles', nome: 'Chocolate profiteroles', preco: 18.9, url: '../assets/img/profiteroles.jpg', descricao: 'The French pastries are full to bursting with cream and drenched in sweet chocolate sauce.They work perfectly as an indulgent dinner party finale or as a sweet gift to your Valentine.'},
    { id: 'caneles', nome: 'Canelés', preco: 16.90, url: '../assets/img/caneles.jpg', descricao: 'A classic and distinctively shaped French confection'},
    { id: 'framboisier', nome: 'Chocolate framboisier', preco: 19.99, url: '../assets/img/framboisier.jpg', descricao: 'Chocolate framboisier recipe is perfect for those wanting to explore the world of French pâtisserie at home.With light-as-air chocolate sponge and chocolate mousse layers laced with raspberry syrup and topped with a luscious raspberry glaze.'},
    { id: 'fraisiers', nome: 'Strawberry and elderflower fraisiers', preco: 29.90, url: '../assets/img/fraisiers.jpg', descricao: 'These beautiful strawberry and elderflower fraisiers are as delicious as they are pretty - perfect for late summer dinner parties or even picnics (weather permitting, of course!).' },
    { id: 'paris_brest', nome: 'Classic Paris-Brest', preco: 22.99, url: '../assets/img/paris_brest.jpg', descricao: 'This classic Paris-Brest recipe is a work of patisserie art, with crispy almond-topped choux pastry encasing mounds of silky praline cream.'},
    { id: 'mille_feuille', nome: 'Strawberry mille-feuille', preco: 20.90,url: '../assets/img/mille_feuille.jpg', descricao: 'Mille-feuille does require a bit of effort, but it does taste as as good as it looks, so this summer dessert is worth the preparation.The custard-filled pastry is served with an English strawberry sorbet.' },
    { id: 'souffle', nome: 'Chocolate soufflé', preco: 32.90, url: '../assets/img/souffle.jpg', descricao: 'Ah, the soufflé. Is there a dessert more simultaneously loved and feared? While a sunk soufflé might haunt the dreams of many a dinner party host the world over, this horror can easily be avoided with a few tricks and techniques.' }
  ];

    return bolos;
  }
}
