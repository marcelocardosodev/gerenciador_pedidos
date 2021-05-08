
import {ColaboradoresService } from '../../colaboradores.service';
import { Component, OnInit } from '@angular/core';
import { Colaborador } from './../colaborador';
import { Router } from '@angular/router'

@Component({
  selector: 'app-colaboradores-lista',
  templateUrl: './colaboradores-lista.component.html',
  styleUrls: ['./colaboradores-lista.component.css']
})
export class ColaboradoresListaComponent implements OnInit {

  colaboradores : Colaborador[] = [];
  colaboradorSelecionado:Colaborador;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(private service : ColaboradoresService, private router : Router) { }

  ngOnInit(): void {
    this.service.getColaboradores()
    .subscribe(resposta => this.colaboradores = resposta);
  }

  novoCadastro(){
    this.router.navigate(['/colaboradores-form'])
  }

  preparaDelecao(colaborador: Colaborador){
    this.colaboradorSelecionado = colaborador;
  }

  deletarColaborador(){
    this.service.deletar(this.colaboradorSelecionado)
      .subscribe(response => {this.mensagemSucesso = 'Colaborador(a) deletado com sucesso!'
                  this.ngOnInit();
                },
                 erro => this.mensagemErro ='Erro ao deletar colaborador(a)'
      );
  }

}
