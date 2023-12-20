import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './store/slices';
import { RootState } from './store/types';
import { throttle } from 'lodash';

let preloadedState = undefined;
let stateString = null;

if ((stateString = localStorage.getItem('state'))) {
  preloadedState = JSON.parse(stateString);
}

export const store = configureStore<RootState>({
  reducer: reducer,
  preloadedState,
});

store.subscribe(throttle(() => {
  console.log('write state in localStorage');

  const state = store.getState();
  localStorage.setItem('state', JSON.stringify(state));
}, 1000));

export type AppDispatch = typeof store.dispatch;
