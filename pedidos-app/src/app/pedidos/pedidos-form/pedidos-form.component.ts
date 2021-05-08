import { Servico } from './../../servicos/servico';
import { Item } from './../../itens/item';
import { PedidoService } from './../../pedido.service';
import { Pedido } from './../pedido';
import { Component, OnInit, ViewChild} from '@angular/core';
import { Colaborador } from '../../colaboradores/colaborador';
import { ColaboradoresService} from '../../colaboradores.service';
import { ServicosService } from '../../servicos.service';
import { FormGroup, FormBuilder, Validators, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms'
 
 



@Component({
  selector: 'app-pedidos-form',
  templateUrl: './pedidos-form.component.html',
  styleUrls: ['./pedidos-form.component.css']
})
export class PedidosFormComponent implements OnInit {

  success : boolean = false;
  errors: String[];
  colaboradores : Colaborador[] = [];
  servicos : Servico[] = [];
  pedido : Pedido = new Pedido();
  pedidoSalvo : Pedido;

  servico : Servico;
  itemForm : FormGroup
  listaItem : Item[] = [];
  servicoSelecionado : Servico;
  

  
  
  constructor( private servicoService : ServicosService, 
              private colaboradorService : ColaboradoresService,
              private pedidoService : PedidoService,
              private formBuilder : FormBuilder) {

    
    this.itemForm = this.formBuilder.group({
      servicoId:['', Validators.required],
      quantidadeHora:['',Validators.required],
      horaVenda:['',Validators.required]
    })
   }

  ngOnInit(): void {

    this.colaboradorService.getColaboradores()
      .subscribe(response => this.colaboradores = response);

    this.servicoService.getServicos().subscribe(response => this.servicos = response );
    
  }


  onSumit(){

    this.pedido.item = this.listaItem;
    console.log(this.pedido)
       this.pedidoService.salvar(this.pedido)
        .subscribe(response =>{
          this.listaItem = [];
          this.success = true;
          this.errors=null;
          this.informarResumo(response);
          this.pedido = new Pedido();
          }, errorResponse =>{
          this.success = false;
          this.errors = errorResponse.error.erros
         
          
        })
  }

  informarResumo(pedido: Pedido){

    this.pedidoSalvo = pedido

    console.log(this.pedidoSalvo);
  }


public addItem(): void{
  const servicoId = this.itemForm.get('servicoId').value;
  const servico: Servico = this.getServicoById(servicoId);
  const horaVenda: number = Number(this.itemForm.get('horaVenda').value);
  const quantidadeHora: number = Number(this.itemForm.get('quantidadeHora').value);

  const item: Item = {
    servico,
    horaVenda,
    quantidadeHora
  };

  console.log(servicoId);
  this.listaItem.push(item);
  this.itemForm.reset();
}

getServicoById(id: number): Servico{
  let servicoAux;
  this.servicos.forEach((servico) => {
    if(Number(servico.id) === Number(id)){
      servicoAux = servico;
    }
  });
  return servicoAux;
}
  
reset(){
  this.itemForm.reset();
}

removeItem(element){
  this.listaItem.forEach((value,index)=>{
    if(value ==element)
    this.listaItem.splice(index, 1)
  });

}

remove = function(item) {	    
  var tr = (item).closest('tr');	
  tr.fadeOut(400, function() {
      tr.remove();
  });	
  return false;
}
}
