import "./App.css";
//import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import TaskApp from "./components/todolistnew/TaskApp";
//import TodoList from "./components/todoList/TodoList";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <TodoList /> */}
      <TaskApp />
    </div>
  );
}

export default App;
