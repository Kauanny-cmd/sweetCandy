package sweet.candy.api.cache;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ItemCarrinho implements Serializable {

    private Long idItem;
    private int quantidade;
}
