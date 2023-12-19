import { legacy_createStore } from 'redux';
import { reducer } from './store/reducers';

const store = legacy_createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch({
  type: 'ADD_TODO',
  payload: { id: Math.random(), title: 'XYZ', completed: false },
});

store.dispatch({
  type: 'UPDATE_NEW_TODO',
  payload: 'XYZ123',
});
