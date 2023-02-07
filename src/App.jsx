import React, { Component } from 'react';
import ColumnsList from './components/ColumnsList';
import Header from './components/Header';
import './styles/App.css';

// Componentizar o formulário de adicionar coluna para também adicionar um cartão
// Criar o componente do cartão
// > Ao clicar abre informações detalhadas
// > Pode adicionar / alterar o título e descrição
// > Tags. Ex: prioridades

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
