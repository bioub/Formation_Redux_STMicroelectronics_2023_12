export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export type TodoSlice = {
  newTodo: string;
  items: Todo[];
};

export type RootState = {
  todos: TodoSlice;
};
