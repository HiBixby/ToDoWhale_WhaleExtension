/*global whale*/
/*global chrome*/
/*global local*/
import React, { useState } from "react";
import moment from "moment";
import "./EditPage.css";

const EditPage = (props) => {
  function goMain() {
    props.setMain(true);
    props.setEdit(false);
  }
  function onExit() {
    goMain();
    const todos = [...props.todos];
    console.log(typeof index);
    let timeNotNull = time;
    if (timeNotNull == null) {
      timeNotNull = 0;
    }
    todos[index] = {
      id: id,
      date: date,
      time: timeNotNull,
      content: toDo,
      link: link,
      noti: isNotiOn,
    };
    props.setTodos(todos);
    console.log(toDoInfo.id, date, toDo, link, time, isNotiOn);
    localStorage.setItem("todos", JSON.stringify(props.todos));
    console.log(localStorage.getItem("todos"));
  }
  function deleteTodo(id) {
    props.setTodos(
      props.todos.filter((todo) => todo.id !== props.selectedToDo.id)
    );
    localStorage.setItem("todos", props.todos);
    console.log("지워진다", id);
    console.log(props.todos);
  }
  let toDoInfo = props.selectedToDo;
  const index = props.todoIndex;
  const [id, setId] = useState(toDoInfo.id);
  const [date, setDate] = useState(toDoInfo.date);
  const [toDo, setToDo] = useState(toDoInfo.content);
  const [link, setLink] = useState(toDoInfo.link);
  const [time, setTime] = useState(toDoInfo.time);

  const [isNotiOn, setIsNotiOn] = useState(toDoInfo.noti);
  return (
    <div className="edit-page text-left">
      <div className="back" onClick={onExit}>
        <i className="fa-solid fa-chevron-left"></i>
      </div>
      <div className="date">{moment(date).format("YYYY.MM.DD")}</div>
      <div className="time-alarm">
        <div className="time">
          <input
            type="time"
            defaultValue={toDoInfo.time}
            onChange={(event) => setTime(event.target.value)}
          ></input>
        </div>
        <i
          className={(isNotiOn ? "fa-solid" : "fa-regular") + " fa-bell"}
          onClick={() => setIsNotiOn(!isNotiOn)}
        ></i>
      </div>
      <div className="todo">
        <div className="todo-title">To Do</div>
        <div className="todo-wrapper">
          <input
            type="text"
            defaultValue={toDoInfo.content}
            placeholder="ex) 에스파 티켓팅 준비"
            onChange={(event) => setToDo(event.target.value)}
          />
        </div>
      </div>
      <div className="link">
        <div className="link-text">Link</div>
        <div className="link-wrapper">
          <input
            type="url"
            defaultValue={toDoInfo.link}
            placeholder="ex) http://naver.com"
            onChange={(event) => setLink(event.target.value)}
          />
        </div>
      </div>
      <button
        className="btn-delete"
        onClick={() => {
          deleteTodo({ id });
          goMain();
        }}
      >
        <i class="fa-solid fa-trash-can"></i> 임시로 만든 삭제 버튼
      </button>
      <p className="text-center">계획을 세웠으면 지켜야죠</p>
    </div>
  );
};

export default EditPage;
