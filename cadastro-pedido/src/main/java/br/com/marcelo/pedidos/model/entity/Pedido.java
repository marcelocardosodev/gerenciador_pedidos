package br.com.marcelo.pedidos.model.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Entity
@Data
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "id_colaborador")
    private Colaborador colaborador;

 /*   @ManyToMany
    @JoinTable(name="pedido_servico",
            joinColumns = {@JoinColumn(name ="id_pedido")},
            inverseJoinColumns = {@JoinColumn(name = "id_servico")})
  //  @JoinColumn(name = "id_servico") */

    @OneToMany
    private List<Item> item;

    @Column(name = "total_hora")
    private BigDecimal totalHora;

    @Column
    private BigDecimal imposto;

    @Column(name = "valor_pedido")
    private BigDecimal valorPedido;

    @Column
    private BigDecimal lucro;

    @Column(name = "data_pedido")
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataPedido;

    @PrePersist
    public void prePersist(){
        setDataPedido(LocalDate.now());
    }
}
