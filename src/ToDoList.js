import React from "react";
import "./ToDoList.css";
import moment from "moment";
const ToDoList = (props) => {
  const todos = [
    { id: 1, date:'10',time: "14:00", content: "내용1", link: null, noti: true },
    {
      id: 2,
      date:'10',
      time: "23:00",
      content: "내용2",
      link: "https://naver.com",
      noti: false,
    },
  ];
  return (
    <div>
      {todos.map((todo) => (
        <div>
            {todo.date === moment(props.selectedDay).format("DD")?
            <div>
                <div className="todolist-time">{todo.time}</div>
                <div className="todolist-content">
                    <div className="todolist-content-text">{todo.content}</div>
                    <div className="todolist-icons">
                        <i onClick={()=>{props.setSelectedToDo(todo);props.goEditPage()}} className="fa-solid fa-pen-to-square mx-3"></i>
                        <i
                            className={(todo.noti ? "fa-solid" : "fa-regular") + " fa-bell"}
                        ></i>
                    </div>
                </div>
                <div className="todolist-link">{todo.link?todo.link:"No Link"}</div>
                <hr />
            </div>
        :null}</div>
      ))}
    </div>
  );
};
export default ToDoList;
