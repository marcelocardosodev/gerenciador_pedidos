import { PedidoService } from './../../pedido.service';
import { Component, OnInit } from '@angular/core';
import { PedidoBusca } from './pedidoBusca';


@Component({
  selector: 'app-pedidos-lista',
  templateUrl: './pedidos-lista.component.html',
  styleUrls: ['./pedidos-lista.component.css']
})
export class PedidosListaComponent implements OnInit {

  
  nomeColaborador : string;
  mes: number;
  meses: number [];
  lista : PedidoBusca[];
  message : string;
  
  constructor( private service : PedidoService) { 

    this.meses = [1,2,3,4,5,6,7,8,9,10,11,12];
  }

  ngOnInit(): void {
  }

  consultar(){
    console.log("colaborador: " + this.nomeColaborador)
    this.service.buscar(this.nomeColaborador, this.mes)
      .subscribe(response => {
        console.log(response);
        this.lista = response;
        console.log("lista retorno " +this.lista);
        if(this.lista.length <= 0){
          this.message = "Nenhum registro encontrado";
        }else{
          this.message = null;
        }
      });

      

  }

}
