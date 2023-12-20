import { Todo } from "../todos/types";
import { User } from "../users/types";

export type TodosSlice = {
  newTodo: string;
  items: Todo[];
  loading: boolean;
  filter: string;
};

export type UsersSlice = {
  items: User[],
  loading: boolean;
  errorMessage: string;
}

export type RootState = {
  todos: TodosSlice;
  users: UsersSlice;
};
