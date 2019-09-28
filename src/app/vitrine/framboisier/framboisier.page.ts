import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-framboisier',
  templateUrl: './framboisier.page.html',
  styleUrls: ['./framboisier.page.scss'],
})
export class FramboisierPage{
  public bolo = "Chocolate framboisier";
  public url = "../assets/img/framboisier.jpg";
  public descricao =
    "Chocolate framboisier recipe is perfect for those wanting to explore the world of French pâtisserie at home."
    + "With light-as-air chocolate sponge and chocolate mousse layers laced with raspberry syrup and topped with a luscious raspberry glaze.";
    constructor(public router: Router) {}

    public boloId(event){
      this.router.navigateByUrl('carrinho/'+event.target.id);
    }
}

