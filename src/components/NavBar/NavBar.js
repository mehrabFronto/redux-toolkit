import { useSelector } from "react-redux";
import styles from "./navBar.module.css";

const NavBar = () => {
   const todosLength = useSelector((state) => state.todos.length);

   return (
      <nav className={styles.navbar}>
         <h1>Todo List Application</h1>
         <span>{todosLength}</span>
      </nav>
   );
};

export default NavBar;
