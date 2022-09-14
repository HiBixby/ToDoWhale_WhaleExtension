/*global chrome */
/*global local*/
import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Calendar from "react-calendar";
import moment from "moment";
import "./style.css";
import MainPage from "./components/MainPage";
import EditPage from "./components/EditPage";

function App() {
  const [todoIndex, setTodoIndex] = useState();
  const [isMainPage, setIsMainPage] = useState(true);
  const [isEditPage, setEditPage] = useState(false);
  const [selectedToDo, setSelectedToDo] = useState();
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    let storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos == null) {
      storedTodos = [];
    }
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    if (todos.length!=0) {
      console.log("저장한 todos:", todos);
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <div className="App antialiased">
      {isMainPage ? (
        <MainPage
          setMain={setIsMainPage}
          setEdit={setEditPage}
          setSelectedToDo={setSelectedToDo}
          todos={todos}
          setTodos={setTodos}
          todoIndex={todoIndex}
          setTodoIndex={setTodoIndex}
        />
      ) : null}
      {isEditPage ? (
        <EditPage
          setMain={setIsMainPage}
          setEdit={setEditPage}
          selectedToDo={selectedToDo}
          todos={todos}
          setTodos={setTodos}
          todoIndex={todoIndex}
          setTodoIndex={setTodoIndex}
        />
      ) : null}
    </div>
  );
}

export default App;
