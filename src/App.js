import { useState } from "react";
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
  const [todos, setTodos] = useState([
    {
      id: 0,
      date: new Date(),
      time: "14:00",
      content:
        "아주아주아주아주아주매우매우매우매우매우매우매우매우매우매우매우매우매우매우매우매우매우매우매우매우 긴 내용",
      link: null,
      noti: true,
    },
    {
      id: 1,
      date: new Date(),
      time: "23:00",
      content: "내용2",
      link: "https://search.shopping.naver.com/book/catalog/33005838635?cat_id=50010881&frm=PBOKPRO&query=%EC%8A%A4%ED%94%84%EB%A7%81%EB%B6%80%ED%8A%B8&NaPm=ct%3Dl7vqq3xs%7Cci%3Df0bf3d0f13db5818474de3410294bdb3f4c913f1%7Ctr%3Dboknx%7Csn%3D95694%7Chk%3D113cde34ebdda1144796a6460a335e4b5f7eb701",
      noti: false,
    },
  ]);
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
