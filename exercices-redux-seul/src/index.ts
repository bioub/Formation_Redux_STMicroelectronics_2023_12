import { addTodo, updateNewTodo , reducer } from './store/slices';
import { todosCompletedSelector } from './store/selectors';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({reducer});

store.subscribe(() => {
  console.log(todosCompletedSelector(store.getState()));
})

store.dispatch(updateNewTodo('XYZ123'));

store.dispatch(addTodo('XYZ'));
