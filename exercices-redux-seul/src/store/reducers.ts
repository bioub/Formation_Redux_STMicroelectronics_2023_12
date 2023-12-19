import { UnknownAction } from 'redux';
import { RootState, Todo } from './types';

const initialState: RootState = {
  todos: {
    newTodo: 'XYZ',
    items: [
      { id: 1, title: 'ABC', completed: true },
      { id: 2, title: 'DEF', completed: false },
      { id: 3, title: 'HIJ', completed: true },
    ],
  },
};

export function reducer(state = initialState, action: UnknownAction) {
  switch (action.type) {
    case 'UPDATE_NEW_TODO':
      return {
        ...state,
        todos: {
          ...state.todos,
          newTodo: action.payload as string,
        },
      };
    case 'ADD_TODO':
      return {
        ...state,
        todos: {
          ...state.todos,
          items: [
            ...state.todos.items,
            action.payload as Todo
          ]
        },
      };
    default:
      return state;
  }
}
