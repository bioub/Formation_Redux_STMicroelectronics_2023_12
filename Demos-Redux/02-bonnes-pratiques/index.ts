import { legacy_createStore } from 'redux';
import { incrementLikes, updateName } from './actions';
import { reducer } from './reducers';
import { likesSelector, nameSelector } from './selectors';

const store = legacy_createStore(reducer);

store.subscribe(() => {
  console.log('likes', likesSelector(store.getState()));
});

store.subscribe(() => {
  console.log('name', nameSelector(store.getState()));
});

store.dispatch(incrementLikes());
store.dispatch(updateName('Toto'));
store.dispatch(incrementLikes());


