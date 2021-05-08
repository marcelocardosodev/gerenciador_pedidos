package br.com.marcelo.pedidos.model.repository;

import br.com.marcelo.pedidos.model.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Integer> {

}
