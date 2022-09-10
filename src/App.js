import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Calendar from "react-calendar";
import "./Calendar.css";
import moment from "moment";
import "./style.css";
import MainPage from "./MainPage";
import EditPage from "./EditPage";

function App() {
  const [isMainPage,setIsMainPage] = useState(true)
  const [isEditPage,setEditPage]=useState(false)
  const [selectedToDo,setSelectedToDo]=useState(null)
  return (
    <div className="App antialiased">
      {isMainPage? <MainPage setMain={setIsMainPage} setEdit={setEditPage} setSelectedToDo={setSelectedToDo}/>:null}
      {isEditPage? <EditPage setMain={setIsMainPage} setEdit={setEditPage} selectedToDo={selectedToDo}/>:null}
    </div>
  );
}

export default App;
