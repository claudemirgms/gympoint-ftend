import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import ListaAlunos from './pages/ListaAlunos'
import Header from './components/Header'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Login } />
        <Route path="/listaalunos" exact component={ ListaAlunos } />
      </Switch>
    </BrowserRouter>
  );
}