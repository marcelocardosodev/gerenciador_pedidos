package br.com.marcelo.pedidos.model.repository;

import br.com.marcelo.pedidos.model.entity.Colaborador;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ColaboradorRepository extends JpaRepository<Colaborador, Integer> {
}
