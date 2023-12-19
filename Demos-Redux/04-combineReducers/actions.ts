import { createAction } from "@reduxjs/toolkit";

export const incrementLikes = createAction('INCREMENT_LIKES');
export const updateName = createAction<string>('UPDATE_NAME');
