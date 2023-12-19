import { UnknownAction } from "redux";
import { RootState } from "./types";

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
  switch (action) {
    default:
      return state;
  }
}
