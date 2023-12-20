import {
  createAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { TodosSlice } from '../types';
import { Todo } from '../../todos/types';
import { getAllTodos } from '../../todos/api';

const initialState: TodosSlice = {
  newTodo: 'XYZ',
  items: [],
  loading: false,
};

export const addTodo = createAction('todos/addTodo', (title: string) => {
  return {
    payload: {
      id: Math.random(),
      title,
      completed: false,
    },
  };
});

export const fetchTodos = createAsyncThunk('todos/fetchTodos', () =>
  getAllTodos()
);

export const todosSlice = createSlice({
  initialState: initialState,
  name: 'todos',
  reducers: {
    updateNewTodo(state, action: PayloadAction<string>) {
      state.newTodo = action.payload;
    },
    deleteTodo(state, action: PayloadAction<Todo>) {
      const index = state.items.findIndex((it) => it.id === action.payload.id);
      state.items.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(addTodo, (state, action) => {
        state.items.push(action.payload);
        state.newTodo = '';
      })
      .addCase(fetchTodos.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { updateNewTodo, deleteTodo } = todosSlice.actions;
