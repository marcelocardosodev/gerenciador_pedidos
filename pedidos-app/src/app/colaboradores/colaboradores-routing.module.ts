import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColaboradoresFormComponent } from './colaboradores-form/colaboradores-form.component'
import { ColaboradoresListaComponent } from './colaboradores-lista/colaboradores-lista.component';

const routes: Routes = [
  {path: 'colaboradores-form', component: ColaboradoresFormComponent},
  {path: 'colaboradores-form/:id', component: ColaboradoresFormComponent},
  {path: 'colaboradores-lista',  component: ColaboradoresListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColaboradoresRoutingModule { }
