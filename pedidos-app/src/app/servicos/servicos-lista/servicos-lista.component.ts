import { ServicosService } from './../../servicos.service';
import { Component, OnInit } from '@angular/core';
import { Servico } from './../servico';
import { Router } from '@angular/router'

@Component({
  selector: 'app-servicos-lista',
  templateUrl: './servicos-lista.component.html',
  styleUrls: ['./servicos-lista.component.css']
})
export class ServicosListaComponent implements OnInit {

  
  servicos : Servico[] = []
  servicoSelecionado: Servico;
  mensagemSucesso : string;
  mensagemErro: string ;

  
  constructor(private service: ServicosService , private router : Router) { }

  ngOnInit(): void {
    this.service.getServicos()
    .subscribe(resposta => this.servicos = resposta);
  }

  novoCadastro(){
    this.router.navigate(['/servicos-form'])
  }

  preparaDelecao(servico : Servico){
    this.servicoSelecionado = servico;
  }

  deletarServico(){
    this.service.deletar(this.servicoSelecionado)
      .subscribe(resonse => {this.mensagemSucesso = 'Serviço deletado com sucesso!'
                this.ngOnInit();
                },
                 erro => this.mensagemErro ='Erro ao deletar o serviço'
      );
  }

}
