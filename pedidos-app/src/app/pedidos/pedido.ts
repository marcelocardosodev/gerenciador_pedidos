import { Item } from './../itens/item';
import { Colaborador } from './../colaboradores/colaborador';
export class Pedido{

    idpedido:number;
    colaborador:Colaborador;
    item:Item[];
    quantidadeHora:string;
    imposto:string;
    valorPedido:string;
    lucro:string;
    dataPedido:string;
}