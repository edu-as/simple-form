import * as React from 'react';
import { Button, TextField, Switch, FormControlLabel, SendIcon} from '@material-ui/core';

function RegisterForm(){
  return(
    <form>
        <TextField
            id="nome"
            label="Nome"
            variant="outlined"
            margin="normal"
            fullWidth 
        />
        <TextField
            id="nome"
            label="Sobrenome"
            variant="outlined"
            margin="normal"
            fullWidth 
        />
        <TextField
            id="nome"
            label="CPF"
            variant="outlined"
            margin="normal"
            fullWidth 
        />
        
        <FormControlLabel
            label="Promoções"
            control={<Switch name="novidades" defaultChecked color="primary" />}
        />
        <FormControlLabel
            label="Novidades"
            control={<Switch name="promocoes" defaultChecked color="secondary" />}
        />
        
        <Button 
            type="submit"variant="outlined" color="success" >
            Cadastrar
        </Button>
    </form>
    );
}

export default RegisterForm;