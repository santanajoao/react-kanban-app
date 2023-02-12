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

// cria um objeto do card e especifica o id da coluna em que o card será inserido
export const addCard = createAction('addCard', (columnID, cardTitle) => ({
  payload: {
    card: {
      title: cardTitle,
      id: nanoid(),
    },
    columnID,
  },
}));
