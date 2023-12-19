import { configureStore } from '@reduxjs/toolkit';
import { incrementLikes, updateName, reducer } from './slices';
import { likesSelector, nameSelector } from './selectors';

const store = configureStore({ reducer });

store.subscribe(() => {
  console.log('likes', likesSelector(store.getState()));
});

store.subscribe(() => {
  console.log('name', nameSelector(store.getState()));
});

store.dispatch(incrementLikes());
store.dispatch(updateName('Toto'));
store.dispatch(incrementLikes());


