package sweet.candy.api.endereco.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import sweet.candy.api.endereco.model.Endereco;
import sweet.candy.api.endereco.repository.EnderecoRepository;

@Service
public class EnderecoService {
    @Autowired
    EnderecoRepository repository;
    public Endereco save(Endereco endereco){
        return repository.save(endereco);
    }

    public ResponseEntity<Endereco> update(Endereco endereco, Long id){
        if(findById(id) != null){
            endereco.setId(id);
            final Endereco enderecoAtualizado = save(endereco);
            return ResponseEntity.status(HttpStatus.OK).body(enderecoAtualizado);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    public Endereco findById(Long id){
        return repository.findById(id).get();
    }
}
