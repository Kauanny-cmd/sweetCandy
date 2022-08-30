package sweet.candy.api.cache;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Reference;
import org.springframework.data.redis.core.RedisHash;
import sweet.candy.api.pedido.model.ItemPedido;

import java.io.Serializable;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@RedisHash("Carrinho")
public class Carrinho implements Serializable {
    @Id
    private String id;
    private List<ItemCarrinho> itens;

    public void adicionarPedido(ItemCarrinho itemCarrinho){
        this.itens.add(itemCarrinho);
    }
}
