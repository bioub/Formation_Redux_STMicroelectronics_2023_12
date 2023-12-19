import { reducer } from './store/reducers';
import { addTodo, updateNewTodo } from './store/actions';
import { todosCompletedSelector } from './store/selectors';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({reducer});

store.subscribe(() => {
  console.log(todosCompletedSelector(store.getState()));
})

store.dispatch(updateNewTodo('XYZ123'));

store.dispatch(addTodo('XYZ'));
