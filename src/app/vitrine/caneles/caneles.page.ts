import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-caneles",
  templateUrl: "./caneles.page.html",
  styleUrls: ["./caneles.page.scss"]
})
export class CanelesPage {
  public event;
  public bolo = "Canelés";
  public url = "../assets/img/caneles.jpg";
  public descricao = "A classic and distinctively shaped French confection";
  constructor(public router: Router) {}

  public boloId(event){
    this.router.navigateByUrl('carrinho/'+event.target.id);
  }
  
}
