import { Servico } from '../../servicos/servico';
import { Colaborador } from '../../colaboradores/colaborador';

export class PedidoBusca{

    id : number;
    colaborador : Colaborador;
    servico : Servico;
    quantidadeHora : number;
    imposto: number;
    valorPedido: number;
    lucro: number;
    dataPedido: string;

}