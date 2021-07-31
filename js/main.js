import Dashboard from "./canvas/dashboard.js";

const CANVAS_TEMP = "dashboard-temp";
const CANVAS_HUM = "dashboard-hum";
const DASHBOARD_TEMP = new Dashboard(CANVAS_TEMP, "온도");
const DASHBOARD_HUM = new Dashboard(CANVAS_HUM, "습도");
const TEMP_VAL = document.getElementById("tempVal");
const HUM_VAL = document.getElementById("humVal");
const CUR_TIME = document.getElementsByClassName("footer_time")[0];

DASHBOARD_TEMP.init();
DASHBOARD_HUM.init();
DASHBOARD_TEMP.setValue(30);
DASHBOARD_HUM.setValue(50);
DASHBOARD_TEMP.drawMeter();
DASHBOARD_HUM.drawMeter();

setInterval(() => {
  const TEMP = (Math.random() * 10 + 25).toFixed(2);
  const HUM = (((Math.random() * 10) / 6) * 10 + 50).toFixed(2);

  DASHBOARD_TEMP.setValue(TEMP);
  DASHBOARD_HUM.setValue(HUM);
  DASHBOARD_TEMP.drawMeter();
  DASHBOARD_HUM.drawMeter();
  TEMP_VAL.textContent = TEMP + "℃";
  HUM_VAL.textContent = HUM + "%";

  const DATE = new Date();
  const YEAR = DATE.getFullYear();
  const MONTH = DATE.getMonth() + 1;
  const DAY = DATE.getDate();
  const HOUR = DATE.getHours();
  const MINUTE = DATE.getMinutes();
  const SECOND = DATE.getSeconds();
  let dayOfWeek = "";
  switch (DATE.getDay()) {
    case 0:
      dayOfWeek = "일";
      break;
    case 1:
      dayOfWeek = "월";
      break;
    case 2:
      dayOfWeek = "화";
      break;
    case 3:
      dayOfWeek = "수";
      break;
    case 4:
      dayOfWeek = "목";
      break;
    case 5:
      dayOfWeek = "금";
      break;
    case 6:
      dayOfWeek = "토";
      break;
  }

  console.log(MONTH);

  CUR_TIME.textContent = `${YEAR}년 ${MONTH}월 ${DAY}일 (${dayOfWeek}) ${HOUR}시 ${MINUTE}분 ${SECOND}초`;
}, 1000);

window.addEventListener("resize", () => {
  DASHBOARD_TEMP.init();
  DASHBOARD_HUM.init();
  DASHBOARD_TEMP.drawMeter();
  DASHBOARD_HUM.drawMeter();
});
