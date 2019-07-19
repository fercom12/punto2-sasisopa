import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RequisitoslegalesPage } from './requisitoslegales.page';

const routes: Routes = [
  {
    path: '',
    component: RequisitoslegalesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RequisitoslegalesPage]
})
export class RequisitoslegalesPageModule {}
