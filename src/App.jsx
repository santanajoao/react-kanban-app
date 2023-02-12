import React, { Component } from 'react';
import ColumnsList from './components/ColumnsList';
import Header from './components/Header';
import './styles/App.css';

// mover o cartão para cima ou baixo
// mover o cartão para outras colunas ícone BiMoveHorizontal

// Criar o componente do cartão
// > Ao clicar abre informações detalhadas
// > Pode adicionar / alterar o título e descrição
// > Tags. Ex: prioridades

// Implementar testes

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ColumnsList />
      </div>
    );
  }
}
