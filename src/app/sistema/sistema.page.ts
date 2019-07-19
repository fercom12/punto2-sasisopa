import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sistema',
  templateUrl: './sistema.page.html',
  styleUrls: ['./sistema.page.scss'],
})
export class SistemaPage implements OnInit {

  constructor(private router: Router, public alertController: AlertController) { }

  async getpeligros() {
    const alert = await this.alertController.create({
      header: 'II. IDENTIFICACIÓN DE PELIGROS Y RIESGOS AMBIENTALES',
      buttons: [
        {
          text: 'Formatos',
          handler: () => {
            this.router.navigate(['./peligrosyriesgos'])
            
          }  
          },
        {
          text: 'Procedimientos',
          handler: () => {
            this.router.navigate(['./peligrosyriesgos-procedimiento'])
          }
        }]
    });
     await alert.present();
  }

  ngOnInit() {
  }

}
