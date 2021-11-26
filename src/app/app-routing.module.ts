import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{CreacionComponent}from './Usuario/creacion/creacion.component';
import{EdicionComponent}from './Usuario/edicion/edicion.component';
import{ListadoComponent}from './Usuario/listado/listado.component';

const routes: Routes = [
  {path:'creacion', component: CreacionComponent},
  {path:'edicion', component: EdicionComponent},
  {path:'listado', component: ListadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
