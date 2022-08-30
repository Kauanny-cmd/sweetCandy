package sweet.candy.api.pedido.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sweet.candy.api.pedido.model.ItemPedido;
import sweet.candy.api.pedido.model.ItemPedidoKey;

@Repository
public interface ItemPedidoRepository extends JpaRepository<ItemPedido, ItemPedidoKey> {
}
