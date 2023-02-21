import { createAction, nanoid } from '@reduxjs/toolkit';

export const addColumn = createAction('addColumn', (columnTitle) => ({
  payload: {
    title: columnTitle,
    id: nanoid(),
    cards: [],
  },
}));

export const removeColumn = createAction('removeColumn');

export const setColumnTitle = createAction('setColumnTitle');

export const moveColumn = createAction(
  'moveColumn',
  (columnIndex, positionDifference) => ({
    payload: {
      columnIndex,
      positionDifference,
    },
  })
);

// cria um objeto do card e especifica o id da coluna em que o card será inserido
export const addCard = createAction('addCard', (columnIndex, cardTitle) => ({
  payload: {
    card: {
      title: cardTitle,
      description: '',
      id: nanoid(),
    },
    columnIndex,
  },
}));

export const removeCard = createAction('removeCard');

export const closeDetails = createAction('closeModal');

export const openDetails = createAction(
  'openModal',
  (columnIndex, cardIndex) => ({
    payload: {
      columnIndex,
      cardIndex,
    },
  })
);

export const setCardTitle = createAction('setCardTitle');

export const setCardDescription = createAction('setCardDescription');

export const closeMove = createAction('closeMove');

export const openMove = createAction('openMove', (columnIndex, cardIndex) => ({
  payload: {
    columnIndex,
    cardIndex,
  },
}));

export const moveCard = createAction('moveCard');

export const setColumns = createAction('setColumns');
