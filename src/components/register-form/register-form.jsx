import React, {useState} from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';

function RegisterForm(){
  const [nameInput, setNameInput] = useState("Eduardo");
  return(
    <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(nameInput);
        }}
    >
    <TextField
    value={nameInput}
    onChange={(event) => {
            setNameInput(event.target.value);
          if(nameInput.length >3) {
            setNameInput (nameInput.substr(0,3));
          }
        }}
        id="name"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth 
    />
    <TextField
        id="name"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth 
    />
    <TextField
        id="name"
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
        type="submit" variant="outlined" color="primary">
        Cadastrar
    </Button>
    </form>
    );
}
export default RegisterForm;