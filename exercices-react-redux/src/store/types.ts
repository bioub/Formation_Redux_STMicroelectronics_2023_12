import { Todo } from '../todos/types';
import { User } from '../users/types';

import { StateWithHistory } from 'redux-undo';

export type TodosSlice = {
  newTodo: string;
  items: Todo[];
  loading: boolean;
  filter: string;
};

export type UsersSlice = {
  items: User[];
  loading: boolean;
  errorMessage: string;
};

export type RootState = {
  todos: StateWithHistory<TodosSlice>;
  users: StateWithHistory<UsersSlice>;
};
