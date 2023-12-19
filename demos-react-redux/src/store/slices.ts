import { RootState } from './types';
import { combineSlices, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: RootState = {
  name: 'Romain',
  likes: 10,
};

export const nameSlice = createSlice({
  initialState: initialState.name,
  name: 'name',
  reducers: {
    updateName(state, action: PayloadAction<string>) {
      return action.payload;
    }
  }
})


export const likesSlice = createSlice({
  initialState: initialState.likes,
  name: 'likes',
  reducers: {
    incrementLikes(state, _action: PayloadAction<undefined>) {
      return state + 1;
    }
  }
})

export const { updateName } = nameSlice.actions;
export const { incrementLikes } = likesSlice.actions;

export const reducer = combineSlices(nameSlice, likesSlice);
