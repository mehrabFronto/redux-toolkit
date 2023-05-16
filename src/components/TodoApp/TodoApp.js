import Header from "../Header/Header";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import TodoList from "../TodoList/TodoList";

const TodoApp = () => {
   return (
      <div className="app">
         <Header />
         <AddTodoForm />
         <TodoList />
      </div>
   );
};

export default TodoApp;
