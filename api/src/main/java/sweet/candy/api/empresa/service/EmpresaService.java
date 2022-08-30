package sweet.candy.api.empresa.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import sweet.candy.api.empresa.cardapio.model.Cardapio;
import sweet.candy.api.empresa.cardapio.repository.CardapioRepository;
import sweet.candy.api.empresa.model.Empresa;
import sweet.candy.api.empresa.repository.EmpresaRepository;

@Service
public class EmpresaService {

    @Autowired
    private EmpresaRepository repository;

    @Autowired
    private CardapioRepository cardapioRepository;

    @Transactional(propagation = Propagation.REQUIRED)
    public Empresa save(Empresa empresa){

        Empresa empresaSalva = repository.save(empresa);

        Cardapio cardapio = new Cardapio();
        cardapio.setEmpresa(empresaSalva);

        Cardapio cardapioSalvo = cardapioRepository.save(cardapio);
        empresaSalva.setCardapio(cardapioSalvo);

        return empresaSalva;
    }
}
