import { Observable } from 'rxjs';
import { Servico } from './../../servicos/servico';
import { ServicosService } from './../../servicos.service';
import { Component, OnInit } from '@angular/core';
import{ Router, ActivatedRoute, Params } from '@angular/router'

import { Colaborador } from '../colaborador'
import { ColaboradoresService } from 'src/app/colaboradores.service';

 
@Component({
  selector: 'app-colaboradores-form',
  templateUrl: './colaboradores-form.component.html',
  styleUrls: ['./colaboradores-form.component.css']
})
export class ColaboradoresFormComponent implements OnInit {

  
  
  colaborador : Colaborador;
  success : boolean = false;
  errors: String[];
  id: number;

  constructor( private service: ColaboradoresService, 
               private router : Router,
               private activatedRoute : ActivatedRoute) { 
    this.colaborador = new Colaborador();
    
  }

  ngOnInit(): void {

    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if(this.id){
        this.service.getColaboradorById(this.id)
          .subscribe(
          response => this.colaborador = response,
          errorResponse => this.colaborador = new Colaborador()
          )
      }
    })
  }

  onSubmit(){

    if(this.id){
     
      if(this.colaborador.nome){
        this.colaborador.nome = this.colaborador.nome.toUpperCase();
      }
      this.service.atualizar(this.colaborador )
        .subscribe(responser => {
          this.success = true;
          this.errors=null;
        }, erroResponse => {
          this.errors = ['Erro ao atualizar o colaborador']
        } )

    }else{
      if(this.colaborador.nome){
        this.colaborador.nome = this.colaborador.nome.toUpperCase();
      }
      
      this.service.salvar(this.colaborador)
      .subscribe(response =>{
        console.log(response);
        this.success = true;
        this.errors=null;
        this.colaborador = response;
      }, errorResponse =>{
        this.success = false;
        this.errors = errorResponse.error.erros
       
        
      });
    }
   
  }

  voltarParaListagem(){
    return this.router.navigate(['/colaboradores-lista']);
  }

  
}
