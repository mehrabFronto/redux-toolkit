import styles from "./todoList.module.css";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
   const todos = [
      { title: "todo1", id: 1, isCompleted: true },
      { title: "todo2", id: 2, isCompleted: false },
      { title: "todo3", id: 3, isCompleted: true },
      { title: "todo4", id: 4, isCompleted: false },
   ];
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
