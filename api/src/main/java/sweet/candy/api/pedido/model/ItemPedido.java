package sweet.candy.api.pedido.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import sweet.candy.api.item.model.Item;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
public class ItemPedido implements Serializable {
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @EmbeddedId
    private ItemPedidoKey id;

    @ManyToOne(fetch = FetchType.EAGER)
    @MapsId("itemId")
    @JoinColumn(name = "item_id")
    private Item item;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ManyToOne(fetch = FetchType.EAGER)
    @MapsId("pedidoId")
    @JoinColumn(name = "pedido_id")
    private Pedido pedido;;

    private int quantItem;
}
