import { createReducer } from "@reduxjs/toolkit";
import { addColumn, removeColumn, setColumnTitle } from "../actions";

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
});

export default kanbanReducer;
