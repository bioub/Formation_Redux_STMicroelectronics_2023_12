import { PayloadAction } from "./types";

export const INCREMENT_LIKES = 'INCREMENT_LIKES';
export const UPDATE_NAME = 'UPDATE_NAME';

export function incrementLikes(): PayloadAction<undefined> {
  return {
    type: INCREMENT_LIKES,
  }
}

export function updateName(payload: string): PayloadAction<string> {
  return {
    type: UPDATE_NAME,
    payload,
  }
}
