package sweet.candy.api.empresa.model;

import lombok.Data;
import sweet.candy.api.empresa.cardapio.model.Cardapio;
import sweet.candy.api.pedido.model.Pedido;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Empresa {

    @Id
    private String cnpj;
    private String nome;
    private String telefone;
    @Embedded
    private Endereco endereco;

    @OneToOne(mappedBy = "empresa")
    private Cardapio cardapio;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="id_empresa")
    private List<Pedido> pedidos;
}
