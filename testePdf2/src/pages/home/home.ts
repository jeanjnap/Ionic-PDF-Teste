import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pdfSrc: string = 'http://www.camisetaexcelencia.com.br/testes/PDF/PDF%201.pdf';

  constructor(public navCtrl: NavController) {

  }

}
