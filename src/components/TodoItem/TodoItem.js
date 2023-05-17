import styles from "./todoItem.module.css";
import { BiCheckCircle } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import { useDispatch } from "react-redux";
import {
   deleteAsyncTodo,
   toggleCompleteAsyncTodo,
} from "../../features/todos/todosSlice";

const TodoItem = ({ todo }) => {
   const dispatch = useDispatch();
   return (
      <div
         className={`${styles.todo} ${
            todo.isCompleted ? styles.complete : null
         }`}>
         {/* tood details */}
         <div className={styles.todo__detail}>
            {/* todo title */}
            <h2>{todo.title}</h2>

            {/* completed line  */}
            <span
               className={`${
                  todo.isCompleted ? styles.lineThrow : null
               }`}></span>
         </div>
         {/* todo buttons */}
         <div className={styles.todo__buttonsConatiner}>
            {/* remove butoon */}
            <button
               className={styles.btn}
               onClick={() => dispatch(deleteAsyncTodo({ id: todo.id }))}>
               <BiTrash />
            </button>

            {/* complete butoon */}
            <button
               className={styles.btn}
               onClick={() => dispatch(toggleCompleteAsyncTodo(todo))}>
               <BiCheckCircle />
            </button>
         </div>
      </div>
   );
};

export default TodoItem;
