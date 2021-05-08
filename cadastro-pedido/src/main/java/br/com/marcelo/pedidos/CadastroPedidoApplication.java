package br.com.marcelo.pedidos;

import br.com.marcelo.pedidos.model.entity.Colaborador;
import br.com.marcelo.pedidos.model.repository.ColaboradorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CadastroPedidoApplication {


    public static void main(String[] args) {

        SpringApplication.run(CadastroPedidoApplication.class, args);

    }
}
