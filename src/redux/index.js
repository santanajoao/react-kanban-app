import { configureStore } from "@reduxjs/toolkit";
import kanbanReducer from "./reducers/kanban";
import thunk from "redux-thunk";

const reducer = {
  kanban: kanbanReducer,
}

const store = configureStore({
  reducer,
  middleware: [thunk],
  devTools: true,
});

export default store;
