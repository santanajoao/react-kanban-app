import { createReducer } from '@reduxjs/toolkit';
import {
  addColumn,
  removeColumn,
  setColumnTitle,
  addCard,
  removeCard,
} from '../actions';

const initialState = {
  columns: [],
};

const kanbanReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addColumn, (state, action) => {
      state.columns = [...state.columns, action.payload];
    })
    .addCase(removeColumn, (state, action) => {
      state.columns = state.columns.filter(({ id }) => id !== action.payload);
    })
    .addCase(setColumnTitle, (state, action) => {
      const { id, newTitle } = action.payload;
      const columnIndex = state.columns.findIndex((column) => column.id === id);
      state.columns[columnIndex].title = newTitle;
    })
    .addCase(addCard, (state, action) => {
      const { columnID, card } = action.payload;
      const columnIndex = state.columns.findIndex(({ id }) => id === columnID);
      const prevCards = state.columns[columnIndex].cards;
      state.columns[columnIndex].cards = [...prevCards, card];
    })
    .addCase(removeCard, (state, action) => {
      const { columnID, cardID } = action.payload;
      const columnIndex = state.columns.findIndex(({ id }) => id === columnID);
      const prevCards = state.columns[columnIndex].cards;
      state.columns[columnIndex].cards = prevCards.filter(
        ({ id }) => id !== cardID
      );
    });
});

export default kanbanReducer;
