import React from 'react';
import { useSelector } from 'react-redux';
import ColumnsList from './components/ColumnsList';
import Header from './components/Header';
import CardDetailsModal from './components/CardDetailsModal';
import './App.css';
import MoveCardModal from './components/MoveCardModal';

// mover o cartão para cima ou baixo
// mover o cartão para outras colunas ícone BiMoveHorizontal

// Criar o componente do cartão
// > Ao clicar abre informações detalhadas
// > Pode adicionar / alterar o título e descrição
// > Tags. Ex: prioridades

// Implementar testes

function App() {
  const { detailsModal, moveModal } = useSelector((state) => state.kanban);
  return (
    <div className="App">
      {detailsModal && <CardDetailsModal />}
      {moveModal && <MoveCardModal />}
      <Header />
      <ColumnsList />
    </div>
  );
}

export default App;
