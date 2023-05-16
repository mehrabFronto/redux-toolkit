import styles from "./navBar.module.css";

const NavBar = () => {
   return (
      <nav className={styles.navbar}>
         <h1>Todo List Application</h1>
         <span>5</span>
      </nav>
   );
};

export default NavBar;
