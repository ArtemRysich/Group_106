// Додатковий матеріал для самостійного ознайомлення
// Event loop documentation
// https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif

// ***********setTimeout*********** \\

// const id = setTimeout(() => {
// console.log('Time is over');
// }, 1000)

// console.log(id)
// Видалення Timeout за необхідністю
// clearTimeout(id)

// Можливість передати параметри для колбеку
// const id = setTimeout((name, country) => {
//     console.log(`Hello my name is ${name}, i from ${country}`);
// }, 1000, 'Alice', 'Ukraine')

// ***********setInterval*********** \\

// const qwerty = setInterval(() => {
// console.log('setInterval');
// }, 1000)

// Видалення Timeout за необхідністю
// clearInterval(qwerty)

// Можливість передати параметри для колбеку
// const id = setInterval((name, country) => {
//     console.log(`Hello my name is ${name}, i from ${country}`);
// }, 1000, 'Alice', 'Ukraine')

// Приклад використання setInterval та setTimeout
// Створимо блок з рекламою яка зникне через 10 секунд

// const elements = {
//   content: document.querySelector(".js-content"),
//   text: document.querySelector(".js-text"),
// };

// let counter = 10;

// elements.text.textContent = `Залишилось ${counter} секунд`;

// const id = setInterval(() => {
//   counter -= 1;

//   if (!counter) { //0 => false => !false => true
//     clearInterval(id);
//     elements.content.style.display = "none";
//   }

//   elements.text.textContent = `Залишилось ${counter} секунд`;
// }, 1000);

// setTimeout(()=>{
//     clearInterval(id)
//     elements.content.style.display = "none"
// },counter * 1000)

// ***********Синхронний та асинхронний JavaScript*********** \\
// console.log('1');

// setTimeout(() => {
//     console.log("2");
// }, 0)

// console.log('3');

// setTimeout(() => {
//     console.log("setTimeout");
// }, 0)

// console.time('Test')

// for(let i = 0; i < 100000; i+=1){
//     console.log(i)
// }

// console.timeEnd('Test')

// ***********Class Date*********** \\
// const currentDate = new Date();
// const targetDate = new Date('09/05/2024  3:00 pm' );

// const diff = targetDate - currentDate

// console.log('minutes', diff / 1000 /60 / 60 / 24)
// console.log(targetDate - currentDate);

// console.log(targetDate)

// Практика
// Потрібно створити два приклади годинника (Електронний та механічний)

const arrDay = [
  "Неділя",
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П`ятниця",
  "Субота",
];
const namesOfMonth = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];

const elements = {
  day: document.querySelector(".date-day"),
  date: document.querySelector(".date"),
  month: document.querySelector(".date-month"),
  year: document.querySelector(".date-year"),
  clock: document.querySelector(".digital-clock"),
  seconds: document.querySelector(".clock-seconds__arrow"),
  minutes: document.querySelector(".clock-minutes__arrow"),
  hours: document.querySelector(".clock-hours__arrow"),
};

setInterval(() => {
  const currentTime = new Date();

  const day = currentTime.getDay();
  const date = currentTime.getDate();
  const month = currentTime.getMonth();
  const year = currentTime.getFullYear();
  const seconds = currentTime.getSeconds();
  const minutes = currentTime.getMinutes();
  const hours = currentTime.getHours();
  const milliseconds = currentTime.getMilliseconds()
  const localTime = currentTime.toLocaleTimeString("uk-UA");

  const secondsDeg = (360 / 60) * seconds ; // + (360 / 60 / 1000) * milliseconds
  const minutesDeg = (360 / 60) * minutes + (360 / 60 / 60) * seconds;
  const hoursDeg = (360 / 12) * hours + (360 / 12 / 60) * minutes;

  elements.day.textContent = arrDay[day];
  elements.date.textContent = date;
  elements.month.textContent = namesOfMonth[month];
  elements.year.textContent = year;
  elements.clock.textContent = `Поточний час ${localTime}`;

  elements.seconds.style.transform = `rotate(${secondsDeg}deg)`;
  elements.minutes.style.transform = `rotate(${minutesDeg}deg)`;
  elements.hours.style.transform = `rotate(${hoursDeg}deg)`;
}, 1000);






























