/***** Оголошення змінних *****/
// const

// const value = 24;

// let;

// let value;

// value = 24;

// value = 'Hello world'

// console.log(value)
// var value
// console.log(value)

// var value = 1
// var value = 2
// var value = 3
// var value = 4
// var value = 5
// console.log(value)

/***** Примітивні типи даних ****/

// Number
// let value = 25;

// value = 45.5;

// value = "awserdtgyuhjiko";

// value = Number(value);
// console.log(value);

// console.log(typeof value);

// String

// Типи рядків '' "" ``

// const str = "Peter say : Hello world";
// console.log(str);
// const total = 45 + 25;
// const str = `Total ${45 + 25}`

// console.log(str)

// const str = 'Total ' + total;

// console.log(str);
// console.log('65611')

// Boolean (true, false);
// console.log(45 > 50)

// undefined

// null

// перевірка типу даних з яким працюємо метод typeof

/***** Комунікація з користувачем та можливість відображення якогось результату *****/

// console.log('Привіт вчи JS', 45 + 10);
// alert('Привіт вчи JS')

// const message = prompt("Введіть ім'я")
// console.log(message)
// console.log(message.length);

// const result = confirm('Будеш вчити JS ?');
// console.log(result);

/***** Основні оператори *****/

// >
// console.log(25 > 21)
// console.log(25 > 25)
// <

// console.log(25 < 21)
// console.log(25 < 26)

// ==
// console.log(5 == '5')
// console.log('1' == true) // 1 == 1

// ===
// console.log("5" === "5");
// console.log("5" === 5);
// console.log("1" === true);

// <=
// console.log(4 <= Number('5'))// false // true

// >=
// console.log(4 >= Number('5'))// false // true

// console.log(null > 0);
// console.log(null < 0);
// console.log(null == 0);
// console.log(null >= 0);
// console.log(null <= 0);

// !=

// console.log("4" != 5);
// console.log(0 != true);
// console.log(5 != 5)

// !==

// console.log(5 !== '5')

// Приклади роботи

// console.log(1 == true); // 1 == 1

// console.log(1 === true);

// console.log('0' == false);

// console.log('0' === false);

// console.log('papaya' < 'pApaya');

// console.log('a' < 'aAbBc');

// console.log('Papaya' === 'papaya');

/***** Значення які завжди будуть конвертовані до false (Обов'язково!!!) *****/

// //  0 (число нуль)
// console.log(Boolean(0));
// // // "" (порожній рядок)
// console.log(Boolean(''));
// // // NaN
// console.log(Boolean(NaN));
// // // undefined
// console.log(Boolean(undefined));
// // // null
// console.log(Boolean(null));
// // // false
// console.log(Boolean(false));

// console.log(Boolean(1));
// console.log(!!1);

// console.log(!1);
// console.log(!0);

// console.log(!!1);

// console.log(Number("18"));

// console.log(1 + 1)

// console.log(+'1')

// console.log(+"1" === 1);
// console.log(Number('1') === 1)

// console.log(Number("1") + 1); // 1 + 1

/***** Методи для роботки з числами (тип даних Number) *****/

// const str = "a25.7a32px";
// console.log(Number(str))

// Number.parseInt()
// console.log(Number.parseInt(str))

// Number.parseFloat()

// console.log(Number.parseFloat(str))

// Number.isNaN()  та метод isNaN()

// console.log(NaN == NaN)

// const num = Number(str) // NaN

// const str = '25.7a32px';
// console.log(typeof str);
// console.log(Number.isNaN(str));// NaN //String
// console.log(isNaN(str)); //Number(str) => NaN

// Класс Math
// const value = 11.5;

// console.log(Math.floor(value))

// console.log(Math.ceil(value))

// console.log(Math.round(value))

// console.log(Math.pow(2, 2));
// console.log(5 ** 4);

// Function expression
/** */
// add(10, 20)
// const add = function (val1, val2) {
//   // console.log('val1', val1)
//   // console.log('val2', val2)
// //   const sum = val1 + val2;

//   return val1 + val2;
// };
// const result = add(10, 20)
// console.log(result);

// Function declaration
// hoisting https://dev.ua/blogs/posts/berezhnoi-1671430719

// function add(val1, val2) {
//    return val1 + val2;
// }

// console.log(add(10, 20));

// *********** Практика ***************** //

// Task - 1

// Виконавши математичні операції та застосувавши шаблоні рядки виведи в консоль кількість та загальну вартість за кожен продукт.

const apple = "🍎";

const appleQuantity = 8;

const applePrice = 34;

// const appleMessage = `${apple} total cost ${appleQuantity * applePrice}`;
// console.log(appleMessage);

const cherry = "🍒";

const cherryQuantity = 3;

const cherryPrice = 72;

// const cherryMessage = `${cherry} total cost ${cherryQuantity * cherryPrice}`;

// console.log(cherryMessage);

// function getTotalCost(productName, quantity, price) {
//   return `${productName} total cost ${quantity * price}`;
// }

// console.log(getTotalCost(apple, appleQuantity, applePrice));
// console.log(getTotalCost(cherry, cherryQuantity, cherryPrice));

// Task - 2

// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01

function getTime(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return `${hours.toString().padStart(2, "0")}:${remainingMinutes
    .toString()
    .padStart(2, "0")}`;
}
console.log(getTime(70));
console.log(getTime(450));
console.log(getTime(1441));

// Task - 3


// Виконай рефакторинг коду щоб уникнути помилок

// const userName = 'Harry';
// const message = `Hello my name is ${userName}`;
// console.log(message);

// const delivery = 25;
// const price = 190;
// const message = `Total purchase, price ${delivery  + price}`;
// console.log(message);


// const x = 8;
// const y = 5;



// console.log(x - y); // 3 
// console.log(y - x);
// Питання?  - чи можна ставити y - на першому місці у console.log(y - x); // 3 ? чи тільки як іде за потоком ( з гори до низу?)














function convertCelsiusToFahrenheit(celsius) {
  // Формула для переведення температури з градусів Цельсія у градуси Фаренгейта
  const fahrenheit = celsius * 9/5 + 32;
  return fahrenheit;
}







function getLastDigit(number) {
  // Використовуємо метод Math.abs() для отримання модуля числа, щоб позбутися від'ємного знаку
  // Потім використовуємо оператор % (остача від ділення) для отримання останньої цифри
  return Math.abs(number) % 10;
}

// Приклад виклику функції для перевірки
console.log(getLastDigit(123)); // 3
console.log(getLastDigit(-456)); // 6
console.log(getLastDigit(7890)); // 0