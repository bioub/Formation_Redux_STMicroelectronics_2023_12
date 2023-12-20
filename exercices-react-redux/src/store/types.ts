import { Todo } from "../todos/types";

export type TodoSlice = {
  newTodo: string;
  items: Todo[];
};

export type RootState = {
  todos: TodoSlice;
};
