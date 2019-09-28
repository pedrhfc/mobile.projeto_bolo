import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-fraisiers",
  templateUrl: "./fraisiers.page.html",
  styleUrls: ["./fraisiers.page.scss"]
})
export class FraisiersPage {
  public bolo = "Strawberry and elderflower fraisiers";
  public url = "../assets/img/fraisiers.jpg";
  public descricao =
    "These beautiful strawberry and elderflower fraisiers are as delicious as they are pretty - perfect for late summer dinner parties or even picnics (weather permitting, of course!).";
    constructor(public router: Router) {}

    public boloId(event){
      this.router.navigateByUrl('carrinho/'+event.target.id);
    }
}
