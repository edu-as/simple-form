import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function PersonalInfo({ toSend, validCpf }) {
  const [nameInput, setNameInput] = useState("");
  const [surNameInput, setSurNameInput] = useState("");
  const [cpfInput, setCpfInput] = useState("");
  const [saleInput, setSaleInput] = useState("true");
  const [newsInput, setNewsInput] = useState("false");
  const [erros, setErros] = useState({ cpfInput: { valid: true, text: "" } });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        toSend({ nameInput, surNameInput, cpfInput, saleInput, newsInput });
      }}
    >
      <TextField
        value={nameInput}
        onChange={(event) => {
          setNameInput(event.target.value);
        }}
        id="name"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={surNameInput}
        onChange={(event) => {
          setSurNameInput(event.target.value);
        }}
        id="surName"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={cpfInput}
        onChange={(event) => {
          setCpfInput(event.target.value);
        }}
        onBlur={(event) => {
          const itsValid = validCpf(cpfInput);
          setErros({ cpfInput: itsValid });
        }}
        error={!erros.cpfInput.valid}
        helperText={erros.cpfInput.text}
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={saleInput}
            onChange={(event) => {
              setSaleInput(event.target.checked);
            }}
            name="sale"
            color="secondary"
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={newsInput}
            onChange={(event) => {
              setNewsInput(event.target.checked);
            }}
            name="news"
            color="primary"
          />
        }
      />

      <Button type="submit" variant="outlined" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}
export default PersonalInfo;
