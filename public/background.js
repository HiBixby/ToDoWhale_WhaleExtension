// chrome.runtime.onMessage.addListener((data) => {
//   if (data.type === "notification") {
//     chrome.notifications.create("", data.options);
//   }
// });

console.log("background 실행됨");

chrome.alarms.onAlarm.addListener(function( alarm ) {
  console.log("Got an alarm!", alarm);
    chrome.notifications.create(null, {
      type: "basic",
      iconUrl: "logo.png",
      title: "웨,일해?",
      message: "자, 이제 일할시간입니다!",
      priority: 2,
    });
});