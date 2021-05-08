import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { ColaboradoresRoutingModule } from './colaboradores-routing.module';
import { ColaboradoresFormComponent } from './colaboradores-form/colaboradores-form.component';
import { ColaboradoresListaComponent } from './colaboradores-lista/colaboradores-lista.component';


@NgModule({
  declarations: [
    ColaboradoresFormComponent, 
    ColaboradoresListaComponent
  ],
  imports: [
    CommonModule,
    ColaboradoresRoutingModule,
    FormsModule
  ],
  exports:[
    ColaboradoresFormComponent,
    ColaboradoresListaComponent
  ]
})
export class ColaboradoresModule { }
