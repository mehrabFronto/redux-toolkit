import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncTodos = createAsyncThunk(
   "todos/getAsyncTodos",
   async (_, { rejectWithValue }) => {
      try {
         const response = await axios.get("http://localhost:3001/todos");
         return response.data;
      } catch (err) {
         return rejectWithValue([], err);
      }
   },
);

export const addAsyncTodo = createAsyncThunk(
   "todos/addAsyncTodo",
   async (payload, { rejectWithValue }) => {
      try {
         const response = await axios.post("http://localhost:3001/todos", {
            title: payload.title,
            isCompleted: false,
         });
         return response.data;
      } catch (err) {
         return rejectWithValue([], err);
      }
   },
);

export const toggleCompleteAsyncTodo = createAsyncThunk(
   "todos/toggleCompleteAsyncTodo",
   async (payload, { rejectWithValue }) => {
      try {
         const response = await axios.put(
            `http://localhost:3001/todos/${payload.id}`,
            {
               id: payload.id,
               title: payload.title,
               isCompleted: !payload.isCompleted,
            },
         );
         return response.data;
      } catch (err) {
         return rejectWithValue([], err);
      }
   },
);

export const deleteAsyncTodo = createAsyncThunk(
   "todos/deleteAsyncTodo",
   async (payload, { rejectWithValue }) => {
      try {
         const response = await axios.delete(
            `http://localhost:3001/todos/${payload.id}`,
         );
         return { id: payload.id };
      } catch (err) {
         return rejectWithValue([], err);
      }
   },
);

const initialState = {
   todos: [],
   error: null,
   loading: false,
};

const todosSlice = createSlice({
   name: "todos",
   initialState,
   reducers: {
      addTodo: (state, action) => {
         if (!action.payload.title) return alert("please fill the todo title");

         const newTodo = {
            title: action.payload.title,
            id: new Date().getTime(),
            isCompleted: false,
         };

         state.todos.push(newTodo);
      },
      toggleCompleteTodo: (state, action) => {
         const selectedTodo = state.todos.find(
            (t) => t.id === action.payload.id,
         );
         selectedTodo.isCompleted = !selectedTodo.isCompleted;
      },
      deleteTodo: (state, action) => {
         const filteredTodos = state.todos.filter(
            (t) => t.id !== action.payload.id,
         );
         state.todos = filteredTodos;
      },
   },
   extraReducers: {
      [getAsyncTodos.fulfilled]: (state, action) => {
         return {
            ...state,
            todos: action.payload,
            loading: false,
            error: null,
         };
      },
      [getAsyncTodos.pending]: (state, action) => {
         return {
            ...state,
            todos: [],
            loading: true,
            error: null,
         };
      },
      [getAsyncTodos.rejected]: (state, action) => {
         return {
            ...state,
            todos: [],
            loading: false,
            error: action.error.message,
         };
      },
      [addAsyncTodo.fulfilled]: (state, action) => {
         state.todos.push(action.payload);
      },
      [toggleCompleteAsyncTodo.fulfilled]: (state, action) => {
         const selectedTodo = state.todos.find(
            (t) => t.id === action.payload.id,
         );
         selectedTodo.isCompleted = action.payload.isCompleted;
      },
      [deleteAsyncTodo.fulfilled]: (state, action) => {
         state.todos = state.todos.filter((t) => t.id !== action.payload.id);
      },
   },
});

export const { addTodo, toggleCompleteTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
