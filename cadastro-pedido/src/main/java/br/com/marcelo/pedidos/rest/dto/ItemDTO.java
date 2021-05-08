package br.com.marcelo.pedidos.rest.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;


@Data
@NoArgsConstructor
public class ItemDTO {



    @NotNull
    private Integer idServico;

    @NotNull
    private String quantidadeHora;

    @NotNull
    private String horaVenda;
}
