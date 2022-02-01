import React from "react";
import { TextField, Button } from "@material-ui/core";

function UserInfo({toSend}) {
  return (
    <form onSubmit={(event)=>{
      event.preventDefault();
      toSend();
    }}>
      <TextField
        id="email"
        label="email"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="senha"
        label="senha"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="outlined" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default UserInfo;
