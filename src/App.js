import { Provider } from "react-redux";
import TodoApp from "./components/TodoApp/TodoApp";
import "./App.css";
import store from "./features/store";

const App = () => {
   return (
      <Provider store={store}>
         <div className="app">
            <TodoApp />
         </div>
      </Provider>
   );
};

export default App;
