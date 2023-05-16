import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

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

         state.push(newTodo);
      },
      toggleCompleteTodo: (state, action) => {
         const selectedTodo = state.find((t) => t.id === action.payload.id);
         selectedTodo.isCompleted = !selectedTodo.isCompleted;
      },
   },
});

export const { addTodo, toggleCompleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
