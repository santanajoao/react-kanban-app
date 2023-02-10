import { createAction, nanoid } from "@reduxjs/toolkit";

export const addColumn = createAction('addColumn', (columnTitle) => ({
  payload: {
    title: columnTitle,
    id: nanoid(),
    cards: [],
  },
}));
