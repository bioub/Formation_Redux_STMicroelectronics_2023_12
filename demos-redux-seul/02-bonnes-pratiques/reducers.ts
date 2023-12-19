import { INCREMENT_LIKES, UPDATE_NAME } from "./actions";
import { PayloadAction, RootState } from "./types";

const initialState: RootState = {
  name: 'Romain',
  likes: 10,
};

export function reducer(state = initialState, action: PayloadAction<string>) {
  switch (action.type) {
    case INCREMENT_LIKES:
      return { ...state, likes: state.likes + 1 };
    case UPDATE_NAME:
      return { ...state, name: action.payload as string };
    default:
      return state;
  }
}
