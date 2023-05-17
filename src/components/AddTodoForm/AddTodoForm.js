import { useDispatch } from "react-redux";
import styles from "./addTodoForm.module.css";
import { useState, useEffect, useRef } from "react";
import { addAsyncTodo } from "../../features/todos/todosSlice";

const AddTodoForm = () => {
   const [todoTitle, setTodoTitle] = useState("");
   const dispatch = useDispatch();

   useEffect(() => {
      inpuRef.current.focus();
   }, []);

   const inpuRef = useRef(null);

   const submitHandler = (e) => {
      e.preventDefault();
      dispatch(addAsyncTodo({ title: todoTitle }));
      setTodoTitle("");
   };

   const changeHandler = (e) => {
      setTodoTitle(e.target.value);
   };

   return (
      <form onSubmit={submitHandler}>
         <h2 className={styles.form__label}>todo title:</h2>
         <div className={styles.from__warpper}>
            <input
               type="text"
               className={styles.form__input}
               placeholder="todo..."
               onChange={changeHandler}
               value={todoTitle}
               ref={inpuRef}
            />
            <button
               type="submit"
               className={styles.form__button}>
               Add
            </button>
         </div>
      </form>
   );
};

export default AddTodoForm;
