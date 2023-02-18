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

// export const removeCard = createAction('removeCard', (columnID, cardID) => ({
//   payload: {
//     columnID,
//     cardID,
//   },
// }));

export const closeModal = createAction('closeModal');

export const openModal = createAction(
  'openModal',
  (columnIndex, cardIndex) => ({
    payload: {
      columnIndex,
      cardIndex,
    },
  })
);

export const setCardTitle = createAction('setCardTitle');
