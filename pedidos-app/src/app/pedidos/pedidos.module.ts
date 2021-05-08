import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PedidosRoutingModule } from './pedidos-routing.module';
import { PedidosFormComponent } from './pedidos-form/pedidos-form.component';
import { PedidosListaComponent } from './pedidos-lista/pedidos-lista.component';



@NgModule({
  declarations: [ 
    PedidosFormComponent, 
    PedidosListaComponent

  ],
  imports: [
    CommonModule,
    PedidosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    PedidosFormComponent,
    PedidosListaComponent
  ]
})
export class PedidosModule { }
