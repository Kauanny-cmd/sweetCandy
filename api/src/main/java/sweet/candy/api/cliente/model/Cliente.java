package sweet.candy.api.cliente.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import sweet.candy.api.endereco.model.Endereco;
import sweet.candy.api.pedido.model.Pedido;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Data
public class Cliente {

    @Id
    private String cpf;
    private String nome;
    private String foto;
    private LocalDate dataNasc;
    private String telefone;
    @Column(unique = true)
    private String email;
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String senha;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="id_referencia")
    private List<Endereco> enderecos;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="id_cliente")
    private List<Pedido> pedidos;
}
