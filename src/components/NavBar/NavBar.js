import { useSelector } from "react-redux";
import styles from "./navBar.module.css";

const NavBar = () => {
   const { todos } = useSelector((state) => state.todos);

   return (
      <nav className={styles.navbar}>
         <h1>Todo List Application</h1>
         <span>{todos.length}</span>
      </nav>
   );
};

export default NavBar;
