import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { ColaboradoresModule } from './colaboradores/colaboradores.module'
import { ServicosModule } from './servicos/servicos.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { ColaboradoresService } from './colaboradores.service';
import { ServicosService } from './servicos.service';
import {PedidoService } from './pedido.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule} from "@angular/material/table";
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ColaboradoresModule,
    ServicosModule,
    PedidosModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule

  ],
  providers: [
    ColaboradoresService,
    ServicosService,
    PedidoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
