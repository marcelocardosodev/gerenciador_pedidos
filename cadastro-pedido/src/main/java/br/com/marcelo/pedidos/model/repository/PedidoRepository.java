package br.com.marcelo.pedidos.model.repository;

import br.com.marcelo.pedidos.model.entity.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PedidoRepository extends JpaRepository<Pedido, Integer> {
/*
    @Query(" select p from Pedido p " +
                          "join p.colaborador c " +
                          "join p.servico s " +
            " where (upper(c.nome) like upper(:nomeColaborador) " +
            "or upper(s.nome) like upper(:nomeServico) )" +
            "and MONTH(p.dataPedido) =:mes ")
    List<Pedido> findByNomeColAndNomeServAndMes(@Param("nomeColaborador") String nomeColaborador, @Param("nomeServico") String nomeServico, @Param("mes") Integer mes);



    @Query(" select p from Pedido p " +
            "join p.servico s" +
            " where upper(s.nome) like upper(:nomeServico)" +
            "and MONTH(p.dataPedido) =:mes ")
    List<Pedido> findByNomeServicoAndMes(@Param("nomeServico") String nomeServico, @Param("mes")Integer mes);
*/

    @Query(" select p from Pedido p " +
            "join p.colaborador c " +
            "join p.item i " +
            "where upper(c.nome) like upper (:nomeColaborador) " +
            "and MONTH (p.dataPedido) =:mes ")
    List<Pedido> findByNomeColAndNomeServAndMes(@Param("nomeColaborador") String nomeColaborador, @Param("mes") Integer mes);

}