// function foo(array) {
//   for (let i = 0; i < array.length; i++) {
//     array[i] *= 2;
//   }
// }

// const numbers = [1, 2, 3, 4, 5];

// foo(numbers)

// console.log(numbers)
// const a = numbers;

// numbers.splice(0,1)
// a.splice(0,1)
// console.log('a',a)
// console.log('numbers', numbers)
// let a = 5;
// let b = a;

// a = 10;
// console.log('a' , a)
// console.log('b' , b)
// console.log(a === b);

// foo(numbers);

// console.log(numbers);

// Примітив МАЄМО ЛИШЕ 5

// 1 Number
// 2 String
// 3 Boolean
// 4 null
// 5 undefined

// Function expression

// const foo = function (a, b = []) {
//   // console.log('a', a)
//   // a = 20;
//   console.log("a", a);
//   console.log("b", b);
//   return a + b;
// };

// console.log(foo(10));
// console.log(foo(10, [1, 2, 3]));
// console.log(foo(10, 20, 30, 40, 50, 60));

// Function declaration
// hoisting https://codeguida.com/post/199
// foo();

// function foo(a = 0, b = 1, c = 2) {
//   console.log("a", a);
//   console.log("b", b);
//   console.log("c", c);
// }

// Псевдомасив arguments

// function getSum() {
//   console.log(arguments);

//   for(const argum of arguments){
//     console.log(argum)
//   }

//   for (let i = 0; i < arguments.length; i += 1) {
//     console.log(arguments[i]);
//   }

//   const array = Array.from(arguments);
//   console.log(array);

// const array = [...arguments]
// console.log(array)
// }

// getSum(1, 2, 3);
// getSum(1, 2, 3, 4, 5);
// getSum(1, 2, 3, 4, 5, 6, 7);

// Області видимості, присвоєння за посиланням та значенням

// // Example 1
// let someValue = 4;

// if (true) {
//     // let someValue = 12;
//     someValue = 11;
//     console.log(someValue)
// }

// console.log(someValue);

// // Example 2
// let someValue = 4;

// if (true) {
//     let someValue = 11;
//     console.log('local',someValue);
// }

// console.log('global',someValue);

//// Example 3
// let someValue = 4;

// if (true) {
//     if (true) {
//         someValue = 24;
//     }
//     let someValue = 11;

// }

// console.log(someValue);

// // Example 4
// let someValue = 2;

// function checkScope(someValue) { // let someValue = 2
//     someValue = 45;
//     // return someValue;
// }

// checkScope(someValue)

// console.log(someValue);

// Example 5
// let someValue = 2;

// function checkScope() {
//     someValue = 45;
//     return someValue;
// }

// checkScope(someValue)

// console.log(someValue);

// // Example 6
// let someValue = 2;

// function checkScope() {
//     someValue = 42;
//     return someValue;
// }

// checkScope()
// console.log(someValue);

// Example 7
// let someArray = ['Hello', 'my', 'name', 'scope'];

// function checkScope(arr) {
//     arr.splice(0,3)
// }

// checkScope(someArray)

// console.log(someArray);

// let someArray = ['Hello', 'my', 'name', 'scope'];

// function checkScope(arr) {
//     arr = Array.from(arr)

//     arr.splice(0,3)
//     console.log(arr)
// }

// checkScope(someArray)

// console.log(someArray);

// Практика

// Task-1;
// Створи функцію яка буде перевіряти чи кожен елемент масиву більше ніж вказане значення. Функція приймає два параметри.
// 1 - Масив чисел
// 2 - Число яке потрібно порівнювати з усіма елементами масиву.
// Функція повертає повідомлення про успішну або не успішну перевірку (повідомлення "Success ✅" "Fail ❌")

// const numbers = [25, 12, 67, 40, 18];

// function checkValue(values, target) {
//   let message = "Success ✅";

//   for (const value of values) {
//     if (value < target) {
//       message = "Fail ❌";
//       break;
//     }
//   }

//   return message;
// }

// console.log(checkValue(numbers, 10));
// console.log(checkValue(numbers, 13));

// Застосування функції + патерн раннє повернення

// const numbers = [25, 12, 67, 40, 18];

// function checkValue(values, target) {
//   for (const value of values) {
//     if (value < target) {
//       return "Fail ❌";
//     }
//   }

//   return "Success ✅";
// }

// console.log(checkValue(numbers, 10));
// console.log(checkValue(numbers, 13));

// Task-2
// Створити функцію яка буде розбивати початковий масив на потрібну кількість елементів розділюячи на декілька масивів.Функція приймає 2 параметри
// 1 - масив значень
// 2 - потрібну кількість елементіа в масиві
//  Функція повертає масив масивів

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function getCombination(arr, count) {
//   const result = [];

//   for (let i = 0; i < arr.length; i += count) {
//     const combination = arr.slice(i, i + count);

//     if (combination.length === count) {
//       result.push(combination);
//     }

//     // result.push(arr.slice(i, i + count));
//   }

//   return result;
// }
// console.log(getCombination(data, 2)); // [[1, 2], [3, 4],[5, 6],[7, 8]]
// console.log(getCombination(data, 3)); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// Example 3 - Площа прямокутника
// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядка. Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {
//   const arr = dimensions.split(" ");
//   const firstValue = Number(arr[0]);
//   const secondValue = Number(arr[1]);

// //   Питання з чату
// // let result = 1;
// //   for (const value of arr) {
// //     result  *= Number(value);
// //   }

// //   console.log(result)

//   return firstValue * secondValue;
// }
// // Питання з чату
// // console.log(getRectArea("8 11 15 24"));
// console.log(getRectArea("8 11"));
// console.log(getRectArea("15 11"));

// Task-4
// Напишіть функції для роботи з колекцією навчальних курсів courses:

// addCourse(name) - додає курс до кінця колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName) - змінює ім'я на нове

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];
// function addCourse(name) {
//   if (courses.includes(name)) {// true
//     return "Ви вже маєте такий курс";
//   }

//   courses.push(name)
// }

// addCourse("Express");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// console.log(addCourse("CSS")); // 'Ви вже маєте такий курс'
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT
// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];
// function removeCourse(name) {
//   const idx = courses.indexOf(name);
// //   0 => false
// //  -1 => true
// // console.log(~-1)
// // console.log(-(idx + 1 ))
//   if (!~idx) { // idx === -1
//     return "Курс із таким ім'ям не знайдено";
//   }

//   courses.splice(idx, 1);
// }
// removeCourse("React");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// console.log(removeCourse("Vue")); // 'Курс із таким ім'ям не знайдено'

// const courses = ["HTML", "CSS", "Express", "JavaScript", "React", "PostgreSQL"];
// function updateCourse(oldName, newName) {
//   const idx = courses.indexOf(oldName);

//   if (idx === -1) {
//     return "Курс із таким ім'ям не знайдено";
//   }

//   if (courses.includes(newName)) {
//     return "Ви вже маєте такий курс";
//   }

//   courses[idx] = newName;
// }

// updateCourse("HTML", "NestJS");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

// console.log(updateCourse("NestJS", "CSS"));
// console.log(updateCourse("qwerty", "NestJS"));

// const users = [
//   "Artem",
//   "Anna",
//   "Larisa",
//   "Maksim",
//   "Svetlana",
//   "David",
//   "Roman",
//   "Olga",
// ];
// const men = ["Artem", "Maksim", "David", "Roman"];

// function getWomen(users, men) {
//   const women = [];

//   for (let i = 0; i < users.length; i += 1) {
//     if(!men.includes(users[i])){
//         women.push(users[i])
//     }
//   }

//   return women;
// }

// console.log(getWomen(users, men));

// Task-6
// Напиши функцію яка на основі масиву користувачів що поставили лайк формує та повертає рядок.
// Функцію має повернути текст, як вказано у прикладах:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// function createStr(arr) {
//   switch (arr.length) {
//     case 0:
//       return `No one likes this`;
//     case 1:
//       return `${arr[0]} likes this`;
//     case 2:
//       return `${arr[0]} and ${arr[1]} like this`;
//     case 3:
//       return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
//     default:
//       return `${arr[arr.length - 2]}, ${arr[arr.length - 1]} and ${
//         arr.length - 2
//       } others like this`;
//   }
// }

// console.log(createStr([]));
// console.log(createStr(["Peter"]));
// console.log(createStr(["Jacob", "Alex"]));
// console.log(createStr(["Max", "John", "Mark"]));
// console.log(createStr(["Mark", "Alex", "Jacob", "Mark"]));


console.log(Symbol("foo"));
console.log(Symbol("foo"))