package br.com.marcelo.pedidos.model.entity;


import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.util.List;

@Entity
@Data
public class Item {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;


    @ManyToOne
    @JoinColumn(name = "id_servico")
    private Servico servico;

    @Column(name="quantidade_hora")
    @NotNull
    private BigDecimal quantidadeHora;


    @Column(name="horas_venda")
    @NotNull
    private BigDecimal horaVenda;


}
