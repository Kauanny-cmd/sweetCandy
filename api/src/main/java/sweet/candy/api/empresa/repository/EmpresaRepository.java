package sweet.candy.api.empresa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sweet.candy.api.empresa.model.Empresa;

@Repository
public interface EmpresaRepository extends JpaRepository <Empresa, String> {
}

