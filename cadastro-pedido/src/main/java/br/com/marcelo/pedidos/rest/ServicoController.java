package br.com.marcelo.pedidos.rest;

import br.com.marcelo.pedidos.model.entity.Servico;
import br.com.marcelo.pedidos.model.repository.ServicoRepository;
import br.com.marcelo.pedidos.util.BigDecimalConverter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.persistence.criteria.CriteriaBuilder;
import javax.validation.Valid;
import java.lang.reflect.Type;
import java.util.List;


@RestController
@RequestMapping("/api/servicos")
@RequiredArgsConstructor
public class ServicoController {

    private ServicoRepository repository;
    private  BigDecimalConverter bigDecimalConverter;


    @Autowired
    public ServicoController(ServicoRepository repository){
        this.repository = repository;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Servico salvar(@RequestBody @Valid Servico servico){


       return  repository.save(servico);
    }


    @GetMapping
    public List<Servico> buscarTodos(){
        return repository.findAll();

    }

    @GetMapping("{id}")
    public Servico buscarPorId(@PathVariable Integer id){
        return repository.findById(id)
                .orElseThrow( ()-> new ResponseStatusException(HttpStatus.NOT_FOUND, "Serviço não encontrado"));
    }


    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar(@PathVariable Integer id){

        repository.findById(id)
                .map(servico ->{ repository.delete(servico);
                    return Void.TYPE;
                } )
                .orElseThrow( ()-> new ResponseStatusException(HttpStatus.NOT_FOUND, "Serviço não encontrado"));
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizar(@PathVariable Integer id, @RequestBody Servico servicoAtualizado){

        repository.findById(id)
                .map(servico -> {
                    servicoAtualizado.setId(servico.getId());
                    return  repository.save(servicoAtualizado);
                } )
                .orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND, "Serviço não encontrado"));

    }
}
