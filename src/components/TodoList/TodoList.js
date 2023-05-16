import styles from "./todoList.module.css";
import TodoItem from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
   const todos = useSelector((state) => state.todos);

   const renderTodos = () => {
      if (todos.length === 0)
         return (
            <div className={styles.Message}>
               <p>there are no todos yet</p>
               <span>add some todos</span>
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
