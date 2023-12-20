import { combineSlices, createAction, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './types';
import { Todo } from '../todos/types';

const initialState: RootState = {
  todos: {
    newTodo: 'XYZ',
    items: [
      { id: 1, title: 'ABC', completed: true },
      { id: 2, title: 'DEF', completed: false },
      { id: 3, title: 'HIJ', completed: true },
    ],
  },
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

export const todosSlice = createSlice({
  initialState: initialState.todos,
  name: 'todos',
  reducers: {
    updateNewTodo(state, action: PayloadAction<string>) {
      state.newTodo = action.payload;
    },
    deleteTodo(state, action: PayloadAction<Todo>) {
      // Ne pas utiliser les références qui empecheraient d'utilise les devTools Redux
      // const index = state.items.indexOf(action.payload);
      const index = state.items.findIndex((it) => it.id === action.payload.id);
      state.items.splice(index, 1);

      // avec filter (immuable ne pas oublier return)
      // return state.items.filter((it) => it.id !== action.payload.id);
    }
  },
  extraReducers(builder) {
    builder.addCase(addTodo, (state, action) => {
      state.items.push(action.payload);
      state.newTodo = '';
    });
  },
});

export const { updateNewTodo, deleteTodo } = todosSlice.actions;

export const reducer = combineSlices(todosSlice)
