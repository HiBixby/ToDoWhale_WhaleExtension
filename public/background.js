// chrome.runtime.onMessage.addListener((data) => {
//   if (data.type === "notification") {
//     chrome.notifications.create("", data.options);
//   }
// });

console.log("background 실행됨");

chrome.alarms.onAlarm.addListener(function( alarm ) {
  console.log("Got an alarm!", alarm);
  const id = alarm.name
  // const todos = JSON.parse(localStorage.getItem("todos"));
  // const todo = todos.find(e=>e.id==id);
    chrome.notifications.create(null, {
      type: "basic",
      iconUrl: "logo.png",
      title: "웨,일해?",
      message: "일할 시간입니다!",
      priority: 2,
    });
        chrome.tabs.create({
      url: 'https://naver.com'
    });
});

whale.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message === `How are you?`) {
        sendResponse(`I'm fine thank you and you?`);
    }
});