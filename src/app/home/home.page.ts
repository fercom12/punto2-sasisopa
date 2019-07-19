import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, public alertController: AlertController) {}
  async alertSASISOPA() {
    const alert = await this.alertController.create({
      header: 'S.A.S.I.S.O.P.A',
      buttons: [
        {
          text: 'Actualizar Datos',
          handler: () => {
            this.router.navigate(['/data-sasisopa'])
            
          }  
          },
        {
          text: 'Ver mi sistema',
          handler: () => {
            this.router.navigate(['./sistema'])
          }
        }]
    });
     await alert.present();
  }
}
