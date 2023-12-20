import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UsersSlice } from '../types';
import { User } from '../../users/types';
import { getAllUsers } from '../../users/api';

const initialState: UsersSlice = {
  items: [],
  loading: false,
  errorMessage: '',
};

export const fetchUsers = createAsyncThunk<User[]>('users/fetchUsers', () =>
  getAllUsers()
);

export const usersSlice = createSlice({
  initialState: initialState,
  name: 'users',
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.errorMessage = '';
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.items = [];
        state.errorMessage = (action.payload as Error).message;
      });
  },
});
