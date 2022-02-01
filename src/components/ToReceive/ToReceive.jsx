import React from "react";
import { TextField, Button} from "@material-ui/core";

function ToReceive() {
  
  return (
    <form>
      <TextField
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="adress"
        label="Endereço"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="number"
        label="Numero"
        type="number"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField        
        margin="normal"
        id="estate"
        label="Estado"
        type="text"
        variant="outlined"
      />
      <TextField
        margin="normal"
        id="city"
        label="Cidade"
        type="text"
        variant="outlined"
      />
      
      <Button type="submit" variant="outlined" color="primary" fullWidth>
        Finalizar cadastro
      </Button>
    </form>
  );
}

export default ToReceive;
