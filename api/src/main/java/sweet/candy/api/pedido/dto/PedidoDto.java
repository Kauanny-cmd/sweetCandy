package sweet.candy.api.pedido.dto;

import lombok.Data;
import sweet.candy.api.pedido.model.FormaPagamento;
import sweet.candy.api.pedido.model.ItemPedido;

import java.util.ArrayList;

@Data
public class PedidoDto {

    private FormaPagamento formaPagamento;
    private float troco;
    private String cpfCliente;
    private String cnpjEmpresa;
    private Long idEndereco;
    private ArrayList<ItemPedido> itens;

}
