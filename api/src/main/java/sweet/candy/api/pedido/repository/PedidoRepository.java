package sweet.candy.api.pedido.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sweet.candy.api.pedido.model.Pedido;

@Repository
public interface PedidoRepository extends JpaRepository<Pedido,Long> {
}
