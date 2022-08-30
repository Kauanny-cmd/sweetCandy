package sweet.candy.api.empresa.cardapio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sweet.candy.api.empresa.cardapio.model.Cardapio;

@Repository
public interface CardapioRepository extends JpaRepository<Cardapio,Long> {
}
