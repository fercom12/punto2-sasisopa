import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'sistema', loadChildren: './sistema/sistema.module#SistemaPageModule' },
  { path: 'data-sasisopa', loadChildren: './data-sasisopa/data-sasisopa.module#DataSASISOPAPageModule' },
  { path: 'sistema', loadChildren: './sistema/sistema.module#SistemaPageModule' },
  { path: 'peligrosyriesgos', loadChildren: './peligrosyriesgos/peligrosyriesgos.module#PeligrosyriesgosPageModule' },
  { path: 'requisitoslegales', loadChildren: './requisitoslegales/requisitoslegales.module#RequisitoslegalesPageModule' },
  { path: 'requisitoslegales', loadChildren: './requisitoslegales/requisitoslegales.module#RequisitoslegalesPageModule' },
  { path: 'metasobjetivos', loadChildren: './metasobjetivos/metasobjetivos.module#MetasobjetivosPageModule' },
  { path: 'requisitoslegales-procedimientos', loadChildren: './requisitoslegales-procedimientos/requisitoslegales-procedimientos.module#RequisitoslegalesProcedimientosPageModule' },
  { path: 'peligrosyriesgos-procedimiento', loadChildren: './peligrosyriesgos-procedimiento/peligrosyriesgos-procedimiento.module#PeligrosyriesgosProcedimientoPageModule' },
  { path: 'formularioii', loadChildren: './formularioii/formularioii.module#FormularioiiPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
