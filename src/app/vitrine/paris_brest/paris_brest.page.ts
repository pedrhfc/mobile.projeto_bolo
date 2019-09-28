import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-paris_brest",
  templateUrl: "./paris_brest.page.html",
  styleUrls: ["./paris_brest.page.scss"]
})
export class ParisBrestPage {
  public bolo = "Classic Paris-Brest";
  public url = "../assets/img/paris_brest.jpg";
  public descricao =
    "This classic Paris-Brest recipe is a work of patisserie art, with crispy almond-topped choux pastry encasing mounds of silky praline cream.";
    constructor(public router: Router) {}

    public boloId(event){
      this.router.navigateByUrl('carrinho/'+event.target.id);
    }
}
