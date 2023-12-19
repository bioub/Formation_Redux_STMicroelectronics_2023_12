import { legacy_createStore } from 'redux';
import { reducer } from './store/reducers';
import { addTodo, updateNewTodo } from './store/actions';
import { todosCompletedSelector } from './store/selectors';

const store = legacy_createStore(reducer);

store.subscribe(() => {
  console.log(todosCompletedSelector(store.getState()));
})

store.dispatch(updateNewTodo('XYZ123'));

store.dispatch(addTodo({ id: Math.random(), title: 'XYZ', completed: true }));
