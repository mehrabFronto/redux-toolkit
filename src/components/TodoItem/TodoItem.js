import styles from "./todoItem.module.css";
import { BiCheckCircle } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";

const TodoItem = ({ todo }) => {
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
            <button className={styles.btn}>
               <BiTrash />
            </button>

            {/* complete butoon */}
            <button className={styles.btn}>
               <BiCheckCircle />
            </button>
         </div>
      </div>
   );
};

export default TodoItem;
