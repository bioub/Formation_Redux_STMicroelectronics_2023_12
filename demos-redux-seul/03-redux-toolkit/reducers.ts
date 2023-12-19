import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { incrementLikes, updateName } from './actions';
import { RootState } from './types';

const initialState: RootState = {
  name: 'Romain',
  likes: 10,
};

export const nameReducer = createReducer(initialState.name, (builder) => {
  builder
    .addCase(updateName, (state, action) => {
      return action.payload;
    });
});


export const likesReducer = createReducer(initialState.likes, (builder) => {
  builder
    .addCase(incrementLikes, (state) => {
      return state + 1;
    });
});

// export const reducer = combineReducers({
//   name: nameReducer,
//   likes: likesReducer,
// })

// RTK appele déjà combineReducers au premier niveau :
export const reducer = {
  name: nameReducer,
  likes: likesReducer,
};
