import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos/todosSlice";

const store = configureStore({ reducer: { todos: todosReducer } });

export default store;
