import { RootState, Todo } from "./types";

export function newTodoSelector(state: RootState): string {
  return state.todos.newTodo;
}

export function itemsSelector(state: RootState): Todo[] {
  return state.todos.items;
}

export function todosCompletedSelector(state: RootState): Todo[] {
  return itemsSelector(state).filter((t) => t.completed);
}