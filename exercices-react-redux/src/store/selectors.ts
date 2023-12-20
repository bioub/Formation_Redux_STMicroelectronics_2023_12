import { createSelector } from '@reduxjs/toolkit';
import { Todo } from '../todos/types';
import { RootState, UsersSlice } from './types';

export function newTodoSelector(state: RootState): string {
  return state.todos.newTodo;
}

export function filterSelector(state: RootState): string {
  return state.todos.filter;
}


export const itemsSelector = createSelector(
  [filterSelector, (state: RootState) => state.todos.items],
  (filter, items) => {
    switch (filter) {
      case 'Active':
        return items.filter((t) => !t.completed);
      case 'Completed':
        return items.filter((t) => t.completed);
      default:
        return items;
    }
  }
)

// export function itemsSelector(state: RootState): Todo[] {
//   const filter = state.todos.filter;

//   console.log('itemsSelector called');


//   switch (filter) {
//     case 'Active':
//       return state.todos.items.filter((t) => !t.completed);
//     case 'Completed':
//       return state.todos.items.filter((t) => t.completed);
//     default:
//       return state.todos.items;
//   }
// }

export function loadingSelector(state: RootState): boolean {
  return state.todos.loading;
}

export function usersSelector(state: RootState): UsersSlice {
  return state.users;
}

// export function todosCompletedSelector(state: RootState): Todo[] {
//   console.log('itemsSelector');
//   return itemsSelector(state).filter((t) => t.completed);
// }

// todosCompletedSelector est memoisé
// il n'est réexécuté que si items change
// export const todosCompletedSelector = createSelector(
//   [itemsSelector],
//   (todos) => {
//     console.log('itemsSelector');
//     return todos.filter((t) => t.completed);
//   }
// );
