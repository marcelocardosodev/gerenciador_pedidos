package br.com.marcelo.pedidos.rest;


import br.com.marcelo.pedidos.model.entity.Item;
import br.com.marcelo.pedidos.model.entity.Servico;
import br.com.marcelo.pedidos.model.repository.ItemRepository;
import br.com.marcelo.pedidos.model.repository.ServicoRepository;
import br.com.marcelo.pedidos.rest.dto.ItemDTO;
import br.com.marcelo.pedidos.util.BigDecimalConverter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/itens")
@RequiredArgsConstructor
public class ItemController {

    private final ServicoRepository servicoRepository;
    private final ItemRepository itemRepository;
    private final BigDecimalConverter bigDecimalConverter;


    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Item salvar(@RequestBody @Valid ItemDTO itemDTO){

        Item item = new Item();

        Servico servico = servicoRepository.findById(itemDTO.getIdServico())
                .orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND, "Erro a item, serviço informado não existe"));

        item.setServico(servico);
        item.setQuantidadeHora(bigDecimalConverter.converter(itemDTO.getQuantidadeHora()));
        item.setHoraVenda(bigDecimalConverter.converter(itemDTO.getHoraVenda()));

        return  itemRepository.save(item);
    }

    @GetMapping("{id}")
    public Item buscar(@PathVariable Integer id){

        return itemRepository.findById(id)
                .orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND, "Item não encontrado"));

    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar(@PathVariable Integer id){

         itemRepository.findById(id)
                .map( item -> { itemRepository.delete(item);
                    return Void.TYPE;
                }).orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND, "Erro ao deletar, item não encontrado"));

    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizar(@PathVariable Integer id, @RequestBody Item itemAtulizado){

        itemRepository.findById(id)
                .map( item -> { itemAtulizado.setId(item.getId());
                   return itemRepository.save(itemAtulizado);

                }).orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND, "Erro ao atualizar, item não encontrado"));
    }

}
