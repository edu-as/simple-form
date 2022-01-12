import * as React from 'react';
import Button from '@mui/material/Button';

function RegisterForm(){
    return(
        <form>
            <label>Nome</label>
            <input type="text" />
            
            <label>Sobrenome</label>
            <input type="text" />

            <label>CPF</label>
            <input type="text" />

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