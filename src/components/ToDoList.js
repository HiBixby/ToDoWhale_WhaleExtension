import React, { useEffect, useState } from "react";
import "./ToDoList.css";
import moment from "moment";
const ToDoList = (props) => {
  const isSameDate = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };
  function editNoti(index){
    const tmp = [...todos];
    tmp[index].noti=!tmp[index].noti;
    props.setTodos(tmp);
  }
  const todos = props.todos;
  return (
    <>
      {todos
        .sort((a, b) => (a===null)-(b===null) || (''+a.time).localeCompare(b.time))
        .map((todo, index) =>
          isSameDate(todo.date, props.selectedDay) ? (
            <div key={index}>
              <div className="todolist-time">
                {todo.time == null ? "--:--" : todo.time}
              </div>
              <div className="todolist-content">
                <div className="todolist-content-text">{todo.content}</div>
                <div className="todolist-icons">
                  <i
                    onClick={() => {
                      props.setSelectedToDo(todo);
                      props.goEditPage();
                      props.setTodoIndex(index);
                      console.log("인덱스", index);
                    }}
                    className="fa-solid fa-pen-to-square mx-3"
                  ></i>
                  <i
                    onClick={()=>{editNoti(index)}}
                    className={
                      (todo.noti ? "fa-solid" : "fa-regular") + " fa-bell"
                    }
                  ></i>
                </div>
              </div>
              <div className="todolist-link">
                {todo.link ? (
                  <a href={todo.link} target="_blank">
                    {todo.link}
                  </a>
                ) : (
                  "No Link"
                )}
              </div>
              <hr />
              <br />
            </div>
          ) : null
        )}
    </>
  );
};
export default ToDoList;
