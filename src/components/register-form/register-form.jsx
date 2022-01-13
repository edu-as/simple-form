import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from "@material-ui/core/TextField";
function RegisterForm(){
    return(
        <form>
            <TextField id="nome" label="Nome" variant="outlined" margin="normal" fullWidth />
            <TextField id="nome" label="Sobrenome" variant="outlined" margin="normal" fullWidth />
            <TextField id="nome" label="CPF" variant="outlined" margin="normal" fullWidth/>

            <label>Promoções</label>
            <input type="checkbox" />

            <label>Novidades</label>
            <input type="checkbox" />
            <Button type="submit" variant="outlined" color="success">
                Cadastrar
            </Button>
        </form>
    );
}

export default RegisterForm;