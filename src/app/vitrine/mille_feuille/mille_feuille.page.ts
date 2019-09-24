import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mille_feuille",
  templateUrl: "./mille_feuille.page.html",
  styleUrls: ["./mille_feuille.page.scss"]
})
export class MilleFeuillePage {
  public bolo = "Strawberry mille-feuille";
  public url = "../assets/img/mille_feuille.jpg";
  public descricao =
    "Mille-feuille does require a bit of effort, but it does taste as as good as it looks, so this summer dessert is worth the preparation." +
    "The custard-filled pastry is served with an English strawberry sorbet.";
  constructor() {}
}
