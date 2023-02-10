import { createReducer } from "@reduxjs/toolkit";
import { addColumn } from "../actions";

const initialState = {
  columns: [],
};

const kanbanReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addColumn, (state, action) => {
      state.columns = [...state.columns, action.payload];
    });
});

export default kanbanReducer;
