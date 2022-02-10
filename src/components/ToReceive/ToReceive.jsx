import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function ToReceive({ toSend }) {
  const [zipCode, setZipCode] = useState("");
  const [adressPP, setAdressPP] = useState("");
  const [numberPP, setNumberPP] = useState("");
  const [statePP, setStatePP] = useState("");
  const [city, setCity] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        toSend({ zipCode, adressPP, numberPP, statePP, city });
      }}
    >
      <TextField
        value={zipCode}
        onChange={(event) => {
          setZipCode(event.target.value);
        }}
        id="zip-code"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={adressPP}
        onChange={(event) => {
          setAdressPP(event.target.value);
        }}
        id="adress"
        label="Endereço"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={numberPP}
        onChange={(event) => {
          setNumberPP(event.target.value);
        }}
        id="number"
        label="Numero"
        type="number"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={statePP}
        onChange={(event) => {
          setStatePP(event.target.value);
        }}
        margin="normal"
        id="estatePP"
        label="Estado"
        type="text"
        variant="outlined"
      />
      <TextField
        value={city}
        onChange={(event) => {
          setCity(event.target.value);
        }}
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
