let now = new Date();
let h2 = document.querySelector('[data-testid="currentTimeUTC"]');
let currentDate = document.querySelector('[data-testid="currentDay"]');
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let months = [
  "January",
  "February",
  "March",
  "Aprik",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];

h2.innerHTML = `${hours} : ${minutes} `;
currentDate.innerHTML = `${day} ${month} ${date}, ${year}`;
