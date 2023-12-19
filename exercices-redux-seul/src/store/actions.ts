import { Todo } from "./types";

export const ADD_TODO = 'ADD_TODO';
export const UPDATE_NEW_TODO = 'UPDATE_NEW_TODO';

export function addTodo(payload: Todo) {
  return {
    type: ADD_TODO,
    payload
  }
} 

export function updateNewTodo(payload: string) {
  return {
    type: UPDATE_NEW_TODO,
    payload
  }
} 