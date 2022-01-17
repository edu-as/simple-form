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
        <RegisterForm toSend={toSendForm}/>
      </Container>
    );
  }
}

function toSendForm(info){
  console.log(info);
}

export default App;