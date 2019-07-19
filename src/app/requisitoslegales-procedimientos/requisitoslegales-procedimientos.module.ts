import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RequisitoslegalesProcedimientosPage } from './requisitoslegales-procedimientos.page';

const routes: Routes = [
  {
    path: '',
    component: RequisitoslegalesProcedimientosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RequisitoslegalesProcedimientosPage]
})
export class RequisitoslegalesProcedimientosPageModule {}
