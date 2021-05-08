import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { Servico } from '../servico';
import { ServicosService } from "../../servicos.service"

@Component({
  selector: 'app-servicos-form',
  templateUrl: './servicos-form.component.html',
  styleUrls: ['./servicos-form.component.css']
})
export class ServicosFormComponent implements OnInit {

  servico: Servico;
  success: boolean = false;
  erros: String[];
  id: number;
 
  constructor(private service: ServicosService, 
              private router : Router,
              private activatedRoute : ActivatedRoute) { 

    this.servico = new Servico();
    
    
  }

  ngOnInit(): void {

    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if(this.id){
        this.service.getServicoById(this.id)
        .subscribe(
        response => this.servico = response,
        erroResponse => this.servico = new Servico()
        )
      }
    })
  }
   
  onSubmit(){

    if(this.id){
      
        if(this.servico.nome && this.servico.valorHora){
          this.servico.nome = this.servico.nome.toUpperCase();
          this.servico.valorHora  = Number(this.servico.valorHora
            .toString().replace(",","."));
        }
     
      this.service.atualizar(this.servico)
        .subscribe(response => {
          this.success = true;
        this.erros = null;
        }, errorResponse =>{
          this.erros = ['Erro ao atualizar o serviço']
        })

    }else{
      
     
      if(this.servico.nome && this.servico.valorHora){
        this.servico.nome = this.servico.nome.toUpperCase();
        this.servico.valorHora  = Number(this.servico.valorHora
          .toString().replace(",","."));
      }
      this.service.salvar(this.servico)
      .subscribe(response =>{
        console.log(response);
        this.success = true;
        this.erros = null;
        this.servico = response;
      }, errorResponse =>{
        this.success = false
        this.erros = errorResponse.error.erros
       
      }
      );
    }

    
  }

  voltarPraListagem(){
    return this.router.navigate(['/servicos-lista']);
  }
  
}
