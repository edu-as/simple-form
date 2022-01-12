import React, { Component } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import './App.css';
import RegisterForm from './components/register-form/register-form';

class App extends Component {
  render() {
    return(
      <Fragment>
        <h1>Formulário de cadastro</h1>
        <RegisterForm/>
      </Fragment>
    );
  }
}

export default App;