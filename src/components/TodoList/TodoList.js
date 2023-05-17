import styles from "./todoList.module.css";
import TodoItem from "../TodoItem/TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAsyncTodos } from "../../features/todos/todosSlice";

const TodoList = () => {
   const { todos, loading, error } = useSelector((state) => state.todos);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getAsyncTodos());
   }, []);

   const renderTodos = () => {
      if (loading)
         return (
            <div className={styles.Message}>
               <p>loading...</p>
            </div>
         );

      if (error)
         return (
            <div className={styles.Message}>
               <p>{error}</p>
            </div>
         );

      return (
         <div className={styles.todo__list}>
            {todos.map((todo) => {
               return (
                  <TodoItem
                     todo={todo}
                     key={todo.id}
                  />
               );
            })}
         </div>
      );
   };

   return <>{renderTodos()}</>;
};

export default TodoList;
