import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { BolosService } from '../services/bolos.service';
import { Bolos } from '../models/bolos';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  bolos: Bolos[];
  constructor(private bolosService: BolosService) {
    this.bolos = bolosService.getBolos();
  }
}