import React, { Component } from 'react';
import './App.css';
import RegisterForm from './components/register-form/register-form';
import 'fontsource-roboto';
import { Container, Typography} from '@material-ui/core';
class App extends Component {
  render() {
    return(
      <Container component="article" maxWidth="sm">
        <Typography align='center' variant="h3" component="h1">Formulário de cadastro</Typography>
        <RegisterForm toSend={toSendForm} validCpf={validCpf} />
      </Container>
    );
  }
}

function toSendForm(info){
  console.log(info);
}

function validCpf(cpfInput){
  if(cpfInput.length !==11){
    return {valid:false, text:"O CPF deve possuir 11 digitos"}
  }else{
    return{valid:true, text:""}
  }
}

export default App;