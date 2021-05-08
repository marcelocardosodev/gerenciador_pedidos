package br.com.marcelo.pedidos.rest;

import br.com.marcelo.pedidos.model.entity.Colaborador;
import br.com.marcelo.pedidos.model.entity.Item;
import br.com.marcelo.pedidos.model.entity.Pedido;
import br.com.marcelo.pedidos.model.entity.Servico;
import br.com.marcelo.pedidos.model.repository.ColaboradorRepository;
import br.com.marcelo.pedidos.model.repository.ItemRepository;
import br.com.marcelo.pedidos.model.repository.PedidoRepository;
import br.com.marcelo.pedidos.model.repository.ServicoRepository;
import br.com.marcelo.pedidos.rest.dto.PedidoDTO;
import br.com.marcelo.pedidos.util.BigDecimalConverter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/pedidos")
@RequiredArgsConstructor
public class PedidoController {

    private final ColaboradorRepository colaboradorRepository;
    private final PedidoRepository repository;
    private final ServicoRepository servicoRepository;
    private final BigDecimalConverter bigDecimalConverter;
    private final ItemRepository itemRepository;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Pedido salvar(@RequestBody @Valid Pedido pedidoWeb ){

        BigDecimal valorPedido =  new BigDecimal("0");
        BigDecimal valorCusto = new BigDecimal("0");
        BigDecimal lucro = new BigDecimal("0");
        BigDecimal horaTotal = new BigDecimal("0");
      //  List<Item> idItem = pedidoWeb.getItem();
        List<Item> listaItem = new ArrayList<>();


        Colaborador colaborador = pedidoWeb.getColaborador();

        List<Item> listaRetorno = pedidoWeb.getItem();

        for(Item item : listaRetorno) {

             Item it = new Item();

        //    listaItem.add(itemRepository.save(item));
            Servico servico = new Servico();
            servico = servicoRepository.findById(item.getServico().getId())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Erro ao procurar servico"));


            valorCusto = valorCusto.add(servico.getValorHora().multiply(item.getQuantidadeHora()));

            valorPedido = valorPedido.add(item.getHoraVenda().multiply(item.getQuantidadeHora()));

            horaTotal = horaTotal.add(item.getQuantidadeHora());

            it.setServico(servico);
            it.setQuantidadeHora(item.getQuantidadeHora());
            it.setHoraVenda(item.getHoraVenda());
            itemRepository.save(it);
          //  listaItem.clear();

            listaItem.add(it);




        }

        Pedido pedido = new Pedido();

        pedido.setColaborador(colaborador);

        pedido.setItem(listaItem);

        pedido.setImposto(bigDecimalConverter.converter(pedidoWeb.getImposto().toString()));

        pedido.setValorPedido(
                (valorPedido.multiply(pedido.getImposto()))
                        .divide(BigDecimal.valueOf(100),2,RoundingMode.HALF_UP).add(valorPedido));


        lucro = (((valorPedido.subtract(valorCusto)).multiply(BigDecimal.valueOf(100))).divide(valorCusto,2, RoundingMode.HALF_UP));

        pedido.setLucro(lucro);

        pedido.setTotalHora(horaTotal);

        return repository.save(pedido);
    }

    @GetMapping
    public List<Pedido> pesquisar(
            @RequestParam(value = "nomeColaborador", required = false, defaultValue = "") String nomeColaborador,
      //      @RequestParam(value = "nomeServico", required = false, defaultValue = "") String nomeServico,
            @RequestParam(value = "mes", required = false) Integer mes

    ){
            return repository.findByNomeColAndNomeServAndMes("%"+nomeColaborador+"%",mes);

    }



}
