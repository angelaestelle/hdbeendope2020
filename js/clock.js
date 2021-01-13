/* TIME WIDGET */
// Credits: https://www.studytonight.com/post/build-a-simple-digital-clock-with-javascript
const clock = () => {
  const date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs >= 12) {
    hrs = hrs - 12;
    period = "PM";
  }
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  const time = `${hrs}:${mins}:${secs}:${period}`;
  document.getElementById("time").innerText = time;
  setTimeout(clock, 1000);
};

clock();