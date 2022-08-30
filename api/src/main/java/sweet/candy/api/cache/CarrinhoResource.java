package sweet.candy.api.cache;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/carrinhos")
public class CarrinhoResource {

    @Autowired
    CarrinhoDao repository;

    @GetMapping
    public List<Carrinho> listAll(){
        return repository.findAll();
    }

    @PostMapping
    public Carrinho save(@RequestBody Carrinho carrinho){
        return repository.save(carrinho);
    }

    @GetMapping("/{id}")
    public Object find(@PathVariable String id){
        return repository.findCarrinhoById(id);
    }

    @DeleteMapping("/{id}")
    public void remove(@PathVariable String id){
        repository.deleteById(id);
    }

    @PutMapping("/{id}")
    public Carrinho adicionarItem(@PathVariable String id, @RequestBody ItemCarrinho itemCarrinho){
        return repository.adicionarItemPedido(id,itemCarrinho);
    }
}
