import { Todo } from "../todos/types";
import { User } from "../users/types";

export type TodoSlice = {
  newTodo: string;
  items: Todo[];
  loading: boolean;
};

export type UserSlice = {
  items: User[],
  loading: boolean;
  errorMessage: string;
}

export type RootState = {
  todos: TodoSlice;
  users: UserSlice;
};
