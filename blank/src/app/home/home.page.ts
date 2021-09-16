import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre:string;
  sede:string;
  seccion:string;

  constructor() {
    this.nombre = "Tomas";
    this.sede = "Plaza Oeste"
    this.seccion = "01"
  }

}
