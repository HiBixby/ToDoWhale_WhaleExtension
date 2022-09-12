import React, { useState } from "react";
import "./ToDoList.css";
import moment from "moment";
const ToDoList = (props) => {
  const [todos,setTodos] = useState([
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
  const isSameDate = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };
  return (
    <>
      {todos.map((todo) =>
        isSameDate(todo.date, props.selectedDay) ? (
          <div key={todo.id}>
            <div className="todolist-time">{todo.time}</div>
            <div className="todolist-content">
              <div className="todolist-content-text">{todo.content}</div>
              <div className="todolist-icons">
                <i
                  onClick={() => {
                    props.setSelectedToDo(todo);
                    props.goEditPage();
                  }}
                  className="fa-solid fa-pen-to-square mx-3"
                ></i>
                <i
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
