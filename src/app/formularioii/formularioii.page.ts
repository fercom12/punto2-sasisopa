import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AyudaPage } from '../ayuda/ayuda.page';


@Component({
  selector: 'app-formularioii',
  templateUrl: './formularioii.page.html',
  styleUrls: ['./formularioii.page.scss'],
})
export class FormularioiiPage implements OnInit {

  constructor(private router: Router, public AlertController:AlertController, public ModalController: ModalController) { }

  ngOnInit() { 
    this.presentModal()
  }
  async presentModal() {
    const modal = await this.ModalController.create({
    component: AyudaPage,
    componentProps: { value: 123 }
    });
  
    await modal.present();
  
  }
  
 
}
