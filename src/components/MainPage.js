/*global whale*/
/*global chrome*/
import React, { useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";
import moment from "moment";
import ToDoList from "./ToDoList";
import "./MainPage.css";

const MainPage = (props) => {
  const [value, onChange] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(new Date());
  const defaultToDo = {
    id: 10,
    date: selectedDay,
    time: null,
    content: null,
    link: null,
    noti: true,
  };
  function goEditPage(create = false) {
    props.setMain(false);
    props.setEdit(true);
  }

  function testnoti() {
    chrome.notifications.create(null, {
      type: "basic",
      iconUrl: "logo192.png",
      title: "웨,일해",
      message: "notification message",
      priority: 2,
    });
  }
  return (
    <div className="main-page">
      <Calendar
        onChange={onChange}
        value={value}
        minDate={new Date()}
        maxDetail="month"
        minDetail="month"
        formatShortWeekday={(locale, date) => moment(date).format("dd")}
        formatDay={(locale, date) => moment(date).format("D")}
        showNeighboringMonth={false}
        prevLabel={<i className="fa-solid fa-chevron-left"></i>}
        nextLabel={<i className="fa-solid fa-chevron-right"></i>}
        next2Label={null}
        prev2Label={null}
        onClickDay={(value, event) => setSelectedDay(value)}
        navigationLabel={({ date, label, locale, view }) => (
          <div>
            <div className="year">{moment(date).format("YYYY")}</div>
            <div className="month">{moment(date).format("MM")}</div>
          </div>
        )}
      />
      <div className="day-nth-task">
        {moment(selectedDay).format("D")}일 Task
      </div>
      <div className="todo-box">
        <div className="todo-list">
          <ToDoList
            setSelectedToDo={props.setSelectedToDo}
            selectedDay={selectedDay}
            goEditPage={goEditPage}
            todos={props.todos}
            setTodos={props.setTodos}
          ></ToDoList>
        </div>
        <div className="btn-add-todo">
          <i
            onClick={() => {
              props.setSelectedToDo(defaultToDo);
              goEditPage(true);
              testnoti();
            }}
            class="fa-solid fa-circle-plus"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
