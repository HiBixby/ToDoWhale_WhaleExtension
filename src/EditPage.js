import React, { useState } from "react";
import moment from "moment";
import "./EditPage.css";

const EditPage = (props) => {
  function onExit() {
    props.setMain(true);
    props.setEdit(false);
    localStorage.setItem("test", "1");
  }
  let toDoInfo = props.selectedToDo;

  const [isNotiOn, setIsNotiOn] = useState(toDoInfo.noti);
  return (
    <div className="edit-page text-left">
      <div className="back" onClick={onExit}>
        <i className="fa-solid fa-chevron-left"></i>
      </div>
      <div className="date">{moment(new Date()).format("YYYY.MM.DD")}</div>
      <div className="time-alarm">
        <div className="time">{toDoInfo.time}</div>
        <i
          className={(isNotiOn ? "fa-solid" : "fa-regular") + " fa-bell"}
          onClick={() => setIsNotiOn(!isNotiOn)}
        ></i>
      </div>
      <div className="todo">
        <div className="todo-title">To Do</div>
        <input
          type="text"
          defaultValue={toDoInfo.content}
          placeholder="ex) 에스파 티켓팅 준비"
          className="bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none block w-full rounded-md sm:text-sm h-10"
        />
      </div>
      <div className="link">
        <div className="link-text">Link</div>
        <input
          type="text"
          defaultValue={toDoInfo.link}
          placeholder="ex) http://naver.com"
          className="bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none block w-full rounded-md sm:text-sm h-10"
        />
      </div>
    </div>
  );
};

export default EditPage;
