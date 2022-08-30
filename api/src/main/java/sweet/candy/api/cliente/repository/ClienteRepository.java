package sweet.candy.api.cliente.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sweet.candy.api.cliente.model.Cliente;

import java.util.Optional;

@Repository
public interface ClienteRepository extends JpaRepository <Cliente, String> {

    public Optional<Cliente> findByEmail(String email);

}
