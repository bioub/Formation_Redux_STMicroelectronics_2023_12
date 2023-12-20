import { createReducer } from '@reduxjs/toolkit';
import { incrementLikes, updateName } from './actions';
import { RootState } from './types';

const initialState: RootState = {
  name: 'Romain',
  likes: 10,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(incrementLikes, (state) => {
      state.likes++;
    })
    .addCase(updateName, (state, action) => {
      state.name = action.payload;
    });
});
