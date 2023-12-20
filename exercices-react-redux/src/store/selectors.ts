import { Todo } from "../todos/types";
import { RootState, UsersSlice } from "./types";

export function newTodoSelector(state: RootState): string {
  return state.todos.newTodo;
}

export function itemsSelector(state: RootState): Todo[] {
  return state.todos.items;
}

export function loadingSelector(state: RootState): boolean {
  return state.todos.loading;
}

export function usersSelector(state: RootState): UsersSlice {
  return state.users;
}


export function todosCompletedSelector(state: RootState): Todo[] {
  return itemsSelector(state).filter((t) => t.completed);
}
