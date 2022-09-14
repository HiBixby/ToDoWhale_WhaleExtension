/*global whale*/
/*global chrome*/
/*global local*/
import React, { useEffect, useState } from "react";
import moment from "moment";
import "./EditPage.css";

const EditPage = (props) => {
  function goMain() {
    props.setMain(true);
    props.setEdit(false);
  }
  function createAlarm() {
    let dateTypeDate = new Date(date);
    let dt =
      dateTypeDate.getFullYear() +
      "-" +
      (dateTypeDate.getMonth() + 1) +
      "-" +
      dateTypeDate.getDate();
    let dateAndTime = new Date(dt + " " + time);
    if (time != null && dateAndTime > Date.now() && isNotiOn) {
      chrome.alarms.create(id.toString(), {
        when: dateAndTime.getTime(),
      });
      console.log(
        "alarm created",
        typeof id.toString(),
        date,
        dateAndTime,
        dateAndTime.getTime()
      );
    } else {
      console.log("알람을 생성하지 않음");
    }
  }
  function onExit() {
    goMain();
    createAlarm();
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
      finished: finished,
    };
    props.setTodos(todos);
    console.log(typeof id, toDoInfo.id, date, toDo, link, time, isNotiOn);
  }

  function deleteTodo(id) {
    props.setTodos(
      props.todos.filter((todo) => todo.id !== props.selectedToDo.id)
    );
    localStorage.setItem("todos", JSON.stringify(props.todos));
    chrome.alarms.clear(props.selectedToDo.id.toString(), (wasCleared) => {
      console.log("wasCleared:", wasCleared);
    });
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
  const [finished, setFinished] = useState(toDoInfo.finished);

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
        <div className="todo-title">To do</div>
        <div className="todo-wrapper">
          <input
            type="text"
            defaultValue={toDoInfo.content}
            placeholder="일정을 입력해주세요"
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
            placeholder="URL을 입력해주세요"
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
        <i class="fa-solid fa-trash-can"></i> 삭제
      </button>
      {/* <p className="text-center">계획을 세웠으면 지켜야죠</p> */}
    </div>
  );
};

export default EditPage;
