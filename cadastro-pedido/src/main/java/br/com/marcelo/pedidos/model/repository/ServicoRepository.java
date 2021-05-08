package br.com.marcelo.pedidos.model.repository;

import br.com.marcelo.pedidos.model.entity.Servico;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServicoRepository extends JpaRepository<Servico, Integer> {
}
