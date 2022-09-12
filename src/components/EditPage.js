/*global whale*/
/*global chrome*/
/*global local*/
import React, { useState } from "react";
import moment from "moment";
import "./EditPage.css";

const EditPage = (props) => {
  function onExit() {
    props.setMain(true);
    props.setEdit(false);
    const todos = [...props.todos];
    console.log(typeof(index));
    todos[index]={id:id,date:date,time:time,content:toDo,link:link,noti:isNotiOn};
    props.setTodos(todos);
    console.log(toDoInfo.id, date, toDo, link, time, isNotiOn);
    // chrome.storage.local.set({ key: storage }, function () {
    //   console.log("Value is set to " + storage);
    // });
  }
  let toDoInfo = props.selectedToDo;
  const index = props.todoIndex;
  const [id, setId] = useState(toDoInfo.id);
  const [date, setDate] = useState(toDoInfo.date);
  const [toDo, setToDo] = useState(toDoInfo.content);
  const [link, setLink] = useState(toDoInfo.link);
  const [time, setTime] = useState(toDoInfo.time);

  const storage = [
    {
      id: 1,
      date: new Date(),
      time: "14:00",
      content:
        "아주아주아주아주아주매우매우매우매우매우매우매우매우매우매우매우매우매우매우매우매우매우매우매우매우 긴 내용",
      link: null,
      noti: true,
    },
    {
      id: 2,
      date: new Date(),
      time: "23:00",
      content: "내용2",
      link: "https://search.shopping.naver.com/book/catalog/33005838635?cat_id=50010881&frm=PBOKPRO&query=%EC%8A%A4%ED%94%84%EB%A7%81%EB%B6%80%ED%8A%B8&NaPm=ct%3Dl7vqq3xs%7Cci%3Df0bf3d0f13db5818474de3410294bdb3f4c913f1%7Ctr%3Dboknx%7Csn%3D95694%7Chk%3D113cde34ebdda1144796a6460a335e4b5f7eb701",
      noti: false,
    },
  ];

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
    </div>
  );
};

export default EditPage;
