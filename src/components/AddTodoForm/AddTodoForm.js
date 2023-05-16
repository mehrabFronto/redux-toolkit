import styles from "./addTodoForm.module.css";
import { useState, useEffect, useRef } from "react";

const AddTodoForm = () => {
   const [todoTitle, setTodoTitle] = useState("");

   useEffect(() => {
      inpuRef.current.focus();
   }, []);

   const inpuRef = useRef(null);

   const submitHandler = (e) => {
      e.preventDefault();
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
