import {
  combineSlices,
  createAction,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import type {
  PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from './types';
import { Todo } from '../todos/types';
import { User } from '../users/types';
import { getAllUsers } from '../users/api';

const initialState: RootState = {
  todos: {
    newTodo: 'XYZ',
    items: [
      // { id: 1, title: 'ABC', completed: true },
      // { id: 2, title: 'DEF', completed: false },
      // { id: 3, title: 'HIJ', completed: true },
    ],
    loading: false,
  },
  users: {
    items: [],
    loading: false,
    errorMessage: '',
  },
};

export const addTodo = createAction('todos/addTodo', (title: string) => {
  return {
    payload: {
      id: Math.random(),
      title,
      completed: false,
    },
  };
});

// export function fetchUsers(): any {
//   return function(dispatch: Dispatch, getState: () => RootState) {
//     const state = getState();
//     dispatch(fetchUsersRequested());
//     getAllUsers()
//       .then((data) => dispatch(fetchUsersSuccess(data)))
//       .catch((err) => dispatch(fetchUsersError(err)))
//   }
// }

// 'users/fetchUsers/pending'
// 'users/fetchUsers/fulfilled'
// 'users/fetchUsers/rejected'

export const fetchUsers = createAsyncThunk<User[]>(
  'users/fetchUsers',
  async () => {
    return getAllUsers();
  }
);

export const usersSlice = createSlice({
  initialState: initialState.users,
  name: 'users',
  reducers: {
    //   fetchUsersRequested(state, action: PayloadAction<undefined>) {
    //     state.loading = true;
    //   },
    //   fetchUsersSuccess(state, action: PayloadAction<User[]>) {
    //     state.loading = false;
    //     state.items = action.payload;
    //     state.errorMessage = '';
    //   },
    //   fetchUsersError(state, action: PayloadAction<Error>) {
    //     state.loading = false;
    //     state.items = [];
    //     state.errorMessage = action.payload.message;
    //   },
  },
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

export const todosSlice = createSlice({
  initialState: initialState.todos,
  name: 'todos',
  reducers: {
    updateNewTodo(state, action: PayloadAction<string>) {
      state.newTodo = action.payload;
    },
    deleteTodo(state, action: PayloadAction<Todo>) {
      // Ne pas utiliser les références qui empecheraient d'utilise les devTools Redux
      // const index = state.items.indexOf(action.payload);
      const index = state.items.findIndex((it) => it.id === action.payload.id);
      state.items.splice(index, 1);

      // avec filter (immuable ne pas oublier return)
      // return state.items.filter((it) => it.id !== action.payload.id);
    },
  },
  extraReducers(builder) {
    builder.addCase(addTodo, (state, action) => {
      state.items.push(action.payload);
      state.newTodo = '';
    });
  },
});

export const { updateNewTodo, deleteTodo } = todosSlice.actions;
// export const { fetchUsersRequested, fetchUsersSuccess, fetchUsersError } =
//   usersSlice.actions;

export const reducer = combineSlices(todosSlice, usersSlice);
