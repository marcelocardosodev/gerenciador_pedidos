package br.com.marcelo.pedidos.model.entity;




import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Colaborador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

   @Column(nullable = false, length = 4)
   @NotNull(message = "{campo.matricula.obrigatorio}")
   private Integer matricula;

    @Column(nullable = false, length =  150)
    @NotEmpty(message = "{campo.nome.obrigatorio}")
    private String nome;

    @Column(name= "data_cadastro", updatable = false)
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataCadastro;

    @PrePersist
    public  void prePersist(){
        setDataCadastro(LocalDate.now());
    }


}
