import { createReducer } from "@reduxjs/toolkit";
import { addColumn, removeColumn } from "../actions";

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
    });
});

export default kanbanReducer;
