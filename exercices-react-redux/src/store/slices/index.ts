import { combineReducers, combineSlices } from "@reduxjs/toolkit";
import { redoTodos, todosSlice, undoTodos } from "./todos";
import { redoUsers, undoUsers, usersSlice } from "./users";
import undoable from "redux-undo";

// export const reducer = combineSlices(todosSlice, usersSlice);

export const reducer = combineReducers({
  [todosSlice.reducerPath]: undoable(todosSlice.reducer, {
    undoType: undoTodos.type,
    redoType: redoTodos.type,
  }),
  [usersSlice.reducerPath]: undoable(usersSlice.reducer, {
    undoType: undoUsers.type,
    redoType: redoUsers.type,
  }),
})
