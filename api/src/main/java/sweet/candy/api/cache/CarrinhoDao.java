package sweet.candy.api.cache;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;
import sweet.candy.api.pedido.model.ItemPedido;

import java.util.List;
import java.util.Optional;

@Repository
public class CarrinhoDao{
    public static final String HASH_KEY = "Carinnho";
    @Autowired
    private RedisTemplate template;

    public Carrinho save(Carrinho carrinho){
        template.opsForHash().put(HASH_KEY,carrinho.getId(),carrinho);
        return carrinho;
    }

    public List<Carrinho> findAll(){
        return template.opsForHash().values(HASH_KEY);
    }

    public Carrinho findCarrinhoById(String id){
            Carrinho carrinho= (Carrinho) template.opsForHash().get(HASH_KEY,id);
            return carrinho;
    }

    public void deleteById(String id){
        template.opsForHash().delete(HASH_KEY,id);
        return;
    }

    public Carrinho adicionarItemPedido(String id, ItemCarrinho itemCarrinho){
        Carrinho carrinhoAtual = (Carrinho) findCarrinhoById(id);
        deleteById(id);
        carrinhoAtual.adicionarPedido(itemCarrinho);
        return save(carrinhoAtual);
    }
}
