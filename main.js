const dayData = document.querySelector(".dayData");
const hourBox = document.getElementById("hourBox");
const minuteBox = document.getElementById("minutesBox");
const secondBox = document.getElementById("secondsBox");
const toggler = document.querySelector(".toggler");
const wrapper = document.querySelector(".clock_wrapper");
const container = document.querySelector(".clock_container");
const clockBox = document.querySelectorAll(".box");
const clockColon = document.querySelectorAll(".colon");

// creating function for getting the day of the week
const getDay = (dayNumber) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[dayNumber];
};

// creating function for getting the month of the year
const getMonthValue = (monthNumber) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[monthNumber];
};

// creating function for getting minute
const getMinute = (minute) => {
  const result = minute > 9 ? minute : "0" + minute;
  return result;
};

//creating function for getting seconds
const getSecond = (second) => {
  const res = second > 9 ? second : "0" + second;
  return res;
};

// creating function for getting all values and then insert it in the Html code using DOM.
function accessDateTime() {
  const date = new Date();
  const hour = date.getHours();
  const minutes = getMinute(date.getMinutes());
  const seconds = getSecond(date.getSeconds());
  const day = getDay(date.getDay());
  const newDate = date.getDate();
  const month = getMonthValue(date.getMonth());
  const year = date.getFullYear();
  dayData.innerHTML = `${day}, ${newDate} ${month} ${year}`;
  hourBox.innerHTML = `${hour}`;
  minuteBox.innerHTML = `${minutes}`;
  secondBox.innerHTML = `${seconds}`;
  setTimeout(accessDateTime, 1000);
}
accessDateTime();

// logic for dark theme toggling

toggler.onclick = function () {
  wrapper.classList.toggle("dark_wrapper");
  container.classList.toggle("dark_container");
  clockBox.forEach((box) => {
    box.classList.toggle("dark_box");
  });
  clockColon.forEach((colon) => {
    colon.classList.toggle("dark_colon");
  });
  if (container.classList.contains("dark_container")) {
    toggler.src = "./Images/sun.png";
  } else {
    toggler.src = "./Images/moon.png";
  }
};
