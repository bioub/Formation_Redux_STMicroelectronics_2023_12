import { UnknownAction } from "redux";

export type PayloadAction<T> = UnknownAction & {
  payload?: T;
}

export type RootState = {
  name: string;
  likes: number;
}
