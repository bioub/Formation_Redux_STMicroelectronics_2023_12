import { combineSlices } from "@reduxjs/toolkit";
import { todosSlice } from "./todos";
import { usersSlice } from "./users";

export const reducer = combineSlices(todosSlice, usersSlice);
