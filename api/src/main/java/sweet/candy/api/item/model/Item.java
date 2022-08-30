package sweet.candy.api.item.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import sweet.candy.api.pedido.model.ItemPedido;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Data
@SequenceGenerator(name ="seq_item_id", allocationSize = 1)
public class Item implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_item_id")

    private long id;
    private String nome;
    private String imagem;
    private float valorUnitario;
    private String ingredientes;
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Long id_cardapio;
    @OneToMany(mappedBy = "item")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private List<ItemPedido> pedidos;
}
