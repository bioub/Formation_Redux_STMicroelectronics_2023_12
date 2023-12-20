import { configureStore } from "@reduxjs/toolkit"
import { reducer } from "./store/slices"
import { RootState } from "./store/types"

export const store = configureStore<RootState>({ reducer: reducer, devTools: {
  // actionCreators: {addTodo, deleteTodo, updateNewTodo}
} })
export type AppDispatch = typeof store.dispatch
