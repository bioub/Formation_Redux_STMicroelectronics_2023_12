import { UnknownAction } from 'redux';
import { RootState, Todo } from './types';
import { createReducer } from '@reduxjs/toolkit';
import { addTodo, updateNewTodo } from './actions';

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

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateNewTodo, (state, action) => {
      state.todos.newTodo = action.payload;
    })
    .addCase(addTodo, (state, action) => {
      state.todos.items.push(action.payload);
    });
});
