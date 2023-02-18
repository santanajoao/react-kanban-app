import { createReducer } from '@reduxjs/toolkit';
import getNewIndex from '../../utils/getNewIndex';
import {
  addColumn,
  removeColumn,
  setColumnTitle,
  moveColumn,
  addCard,
  // removeCard,
  closeDetails,
  openDetails,
  setCardTitle,
  openMove,
  closeMove,
  setCardDescription,
  moveCard,
} from '../actions';

const initialState = {
  columns: [],
  detailsModal: false,
  moveModal: false,
  editingCardIndex: 0,
  editingColumnIndex: 0,
};

const kanbanReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addColumn, (state, action) => {
      state.columns = [...state.columns, action.payload];
    })
    .addCase(removeColumn, (state, action) => {
      state.columns.splice(action.payload, 1);
    })
    .addCase(setColumnTitle, (state, action) => {
      const { index, newTitle } = action.payload;
      state.columns[index].title = newTitle;
    })
    .addCase(addCard, (state, action) => {
      const { columnIndex, card } = action.payload;
      const prevCards = state.columns[columnIndex].cards;
      state.columns[columnIndex].cards = [...prevCards, card];
    })
    // .addCase(removeCard, (state, action) => {
    //   const { columnID, cardID } = action.payload;
    //   const columnIndex = state.columns.findIndex(({ id }) => id === columnID);
    //   const prevCards = state.columns[columnIndex].cards;
    //   state.columns[columnIndex].cards = prevCards.filter(
    //     ({ id }) => id !== cardID
    //   );
    // })
    .addCase(moveColumn, (state, action) => {
      const { columnIndex, positionDifference } = action.payload;
      const newIndex = getNewIndex(
        state.columns,
        columnIndex,
        positionDifference
      );
      state.columns.splice(newIndex, 0, state.columns[columnIndex]);

      const newCurrentIndex =
        columnIndex > newIndex ? columnIndex + 1 : columnIndex;
      state.columns.splice(newCurrentIndex, 1);
    })
    .addCase(closeDetails, (state) => {
      state.detailsModal = false;
    })
    .addCase(openDetails, (state, action) => {
      const { columnIndex, cardIndex } = action.payload;
      state.editingColumnIndex = columnIndex;
      state.editingCardIndex = cardIndex;
      state.detailsModal = true;
    })
    .addCase(setCardTitle, (state, action) => {
      const column = state.columns[state.editingColumnIndex];
      const card = column.cards[state.editingCardIndex];
      card.title = action.payload;
    })
    .addCase(setCardDescription, (state, action) => {
      const column = state.columns[state.editingColumnIndex];
      const card = column.cards[state.editingCardIndex];
      card.description = action.payload;
    })
    .addCase(openMove, (state, action) => {
      const { columnIndex, cardIndex } = action.payload;
      state.editingColumnIndex = columnIndex;
      state.editingCardIndex = cardIndex;
      state.moveModal = true;
    })
    .addCase(closeMove, (state) => {
      state.moveModal = false;
    })
    .addCase(moveCard, (state, action) => {
      const initialColumn = state.columns[state.editingColumnIndex];
      const card = initialColumn.cards[state.editingCardIndex];
      initialColumn.cards.splice(state.editingCardIndex, 1);
      const targetColumn = state.columns[action.payload];
      targetColumn.cards = [...targetColumn.cards, card];
      state.moveModal = false;
    });
});

export default kanbanReducer;
