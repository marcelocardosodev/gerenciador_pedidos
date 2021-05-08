import { PedidosListaComponent } from './pedidos-lista/pedidos-lista.component';
import { PedidosFormComponent } from './pedidos-form/pedidos-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'pedidos-form', component: PedidosFormComponent},
  {path: 'pedidos-listagem', component : PedidosListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRoutingModule { }
