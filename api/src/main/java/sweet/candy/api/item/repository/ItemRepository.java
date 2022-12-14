package sweet.candy.api.item.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sweet.candy.api.item.model.Item;

@Repository
public interface ItemRepository extends JpaRepository <Item, Long> {
}
