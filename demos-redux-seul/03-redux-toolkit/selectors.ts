import { RootState } from "./types";

export function nameSelector(state: RootState) {
  return state.name;
}

export function likesSelector(state: RootState) {
  return state.likes;
}
