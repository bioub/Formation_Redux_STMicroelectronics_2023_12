import { PayloadAction, createAction, nanoid } from "@reduxjs/toolkit";
import { Todo } from "./types";


export const addTodo = createAction('todos/addTodo', (title: string) => {
  return {
    payload: {
      id: Math.random(),
      title,
      completed: false,
    },
  };
});
export const updateNewTodo = createAction<string>('todos/updateNewTodo');