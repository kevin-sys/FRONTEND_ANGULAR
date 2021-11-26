import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './Usuario/listado/listado.component';
import { EdicionComponent } from './Usuario/edicion/edicion.component';
import { CreacionComponent } from './Usuario/creacion/creacion.component';
import{FormsModule}from'@angular/forms';
import{ServiceService}from'../app/Service/service.service';
import{HttpClientModule}from'@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    EdicionComponent,
    CreacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
