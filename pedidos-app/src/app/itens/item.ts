import { Servico } from './../servicos/servico';
export interface Item {
    servico: Servico;
    quantidadeHora: number;
    horaVenda: number;
}
