import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-profiteroles",
  templateUrl: "./profiteroles.page.html",
  styleUrls: ["./profiteroles.page.scss"]
})
export class ProfiterolesPage {
  public bolo = "Chocolate profiteroles";
  public url = "../assets/img/profiteroles.jpg";
  public descricao =
    "The French pastries are full to bursting with cream and drenched in sweet chocolate sauce." + 
    "They work perfectly as an indulgent dinner party finale or as a sweet gift to your Valentine.";
  constructor() {}
}
