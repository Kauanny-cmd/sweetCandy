package sweet.candy.api.endereco.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sweet.candy.api.endereco.model.Endereco;

public interface EnderecoRepository extends JpaRepository<Endereco, Long> {
}
