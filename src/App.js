import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import './App.css';
import RegisterForm from './components/register-form/register-form';

class App extends Component {
  render() {
    return(
      <Container maxWidth="sm">
        <h1>Formulário de cadastro</h1>
        <RegisterForm/>
      </Container>
    );
  }
}

export default App;