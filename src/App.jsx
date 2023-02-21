import React from 'react';
import { useSelector } from 'react-redux';
import ColumnsList from './components/ColumnsList';
import Header from './components/Header';
import CardDetailsModal from './components/CardDetailsModal';
import MoveCardModal from './components/MoveCardModal';
import styles from './App.module.css';

// mover o cartão para cima ou baixo

// > Tags. Ex: prioridades

// Implementar testes

function App() {
  const { detailsModal, moveModal } = useSelector((state) => state.kanban);
  return (
    <div className={styles.app}>
      {detailsModal && <CardDetailsModal />}
      {moveModal && <MoveCardModal />}
      <Header />
      <ColumnsList />
    </div>
  );
}

export default App;
