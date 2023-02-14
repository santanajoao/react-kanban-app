import React, { Component } from 'react';
import { connect } from 'react-redux';
import ColumnsList from './components/ColumnsList';
import Header from './components/Header';
import Modal from './components/Modal';
import './styles/App.css';

// mover o cartão para cima ou baixo
// mover o cartão para outras colunas ícone BiMoveHorizontal

// Criar o componente do cartão
// > Ao clicar abre informações detalhadas
// > Pode adicionar / alterar o título e descrição
// > Tags. Ex: prioridades

// Implementar testes

class App extends Component {
  render() {
    const { showModal } = this.props;
    return (
      <div className="App">
        {showModal && <Modal />}
        <Header />
        <ColumnsList />
      </div>
    );
  }
}

const mapStateToProps = ({ kanban }) => ({
  showModal: kanban.showModal,
});

export default connect(mapStateToProps)(App);
