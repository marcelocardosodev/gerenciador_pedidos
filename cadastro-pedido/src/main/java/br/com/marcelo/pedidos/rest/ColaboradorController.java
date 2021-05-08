package br.com.marcelo.pedidos.rest;

import br.com.marcelo.pedidos.model.entity.Colaborador;
import br.com.marcelo.pedidos.model.repository.ColaboradorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/colaboradores")
public class ColaboradorController {

    private final ColaboradorRepository repository;

    @Autowired
    public ColaboradorController(ColaboradorRepository repository) {

        this.repository = repository;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Colaborador salvar(@RequestBody @Valid Colaborador colaborador){

        return repository.save(colaborador);
    }

    @GetMapping
    public List<Colaborador> buscarTodos(){
        return repository.findAll();
    }

    @GetMapping("{id}")
    public Colaborador buscarPorId(@PathVariable Integer id){
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Colaborador não encontrado"));
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar (@PathVariable Integer id){
       repository.findById(id)
               .map(colaborador -> {
                   repository.delete(colaborador);
                   return  Void.TYPE;
               })
               .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Colaborador não encontrado"));
    }


    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizar(@PathVariable Integer id, @RequestBody Colaborador colaboradorAtualizado){

        repository.findById(id)
                .map(colaborador -> {
                    colaboradorAtualizado.setId((colaborador.getId()));
                    return repository.save(colaboradorAtualizado);
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Colaborador não encontrado"));
    }
}
