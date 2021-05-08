package br.com.marcelo.pedidos.rest.dto;

import br.com.marcelo.pedidos.model.entity.Colaborador;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.List;

@Data
@NoArgsConstructor
public class PedidoDTO {

    @NotNull(message ="{campo.colaborador.obrigatorio}")
    private Colaborador colaborador;

    @NotNull(message ="{campo.colaborador.obrigatorio}")
    private List<Integer> items;

    @NotNull(message ="{campo.imposto.obrigatorio}")
    private String  imposto;

   private String  totalHora;

    private String  valorPedido;

    private String  lucro;

    private String  dataPedido;


}
