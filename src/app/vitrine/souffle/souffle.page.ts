import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-souffle",
  templateUrl: "./souffle.page.html",
  styleUrls: ["./souffle.page.scss"]
})
export class SoufflePage {
  public bolo = "Chocolate soufflé";
  public url = "../assets/img/souffle.jpg";
  public descricao =
    "Ah, the soufflé. Is there a dessert more simultaneously loved and feared?" +
    "While a sunk soufflé might haunt the dreams of many a dinner party host the world over, this horror can easily be avoided with a few tricks and techniques.";
    constructor(public router: Router) {}

    public boloId(event){
      this.router.navigateByUrl('carrinho/'+event.target.id);
    }
}
