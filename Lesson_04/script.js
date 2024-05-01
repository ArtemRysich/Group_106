/***** Методи та властивості для роботки з рядками (тип даних String) *****/

// const str = 'Hello WoRld';

// length
// console.log(str.length);
// console.log(str[0])
// console.log(str[str.length - 1])

// toLowerCase()
// console.log(str.toLowerCase());
// console.log(str)
// console.log('qwerty111' === 'qwertY111'.toLowerCase())

// toUpperCase()
// console.log(str.toUpperCase());
// console.log(str)

// indexOf()
// console.log(str.indexOf(' '));
// console.log(str.indexOf('h'));

// includes
// console.log(str.toLowerCase().includes('world'));

// endsWith()
// console.log(str.endsWith('ld'));

// startsWith()
// console.log(str.startsWith('h'));
// replace()
// console.log(str.replace('l', '🍕'));
// console.log(str)

// replaceAll()
// console.log(str.replaceAll(' ','🍟'));

// const str = "hello world hello";
// slice()

// const idx = str.indexOf(" ");//5
// console.log(str.slice(idx, str.indexOf(" ", idx + 1)));
// console.log(str);

/***** Цикл for *****/

// for (initialization; condition; post-expression) {
//   // statements
// }

// for(let i = 0; i < str.length; i+=2){
// console.log(str[i])
// }

// for(let i = str.length - 1; i >= 0; i-=1){

// }

/***** Цикл while *****/

// while (condition) {
//   // (statement)
// }

// let i = 0;
// while (i < str.length) {
//   console.log(str[i]);
//   i += 1;
// }

// ПЕРЕРВА ДО 21.22

/***** Цикл do while *****/

// do {
//   // statement
// } while (condition);

// const str = "Hello world";

// let i = 0;

// do {
//   console.log(str[i]);
//   i += 1;
// } while (i < -1);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators
// ПРАКТИКА \\

// Task - 1
// Виконай рефакторинг коду так, щоб у змінну value присвоювалося значення змінної incomingValue, якщо воно не рівне undefined або null. В іншому випадку має присвоюватися значення defaultValue. Перевір роботу скрипта для наступних значень змінної incomingValue: null, undefined, 0. Використовуй оператор ?? (nullish coalescing operator).

// const incomingValue = undefined;
// const defaultValue = 10;
// const value = incomingValue ?? defaultValue;
// console.log(value);

// ||

// ''
// 0
// undefined
// null
// NaN
// false

// ??

// undefined
// null

// Task - 2
// Потрібно створити функцію яка буде рахувати за скільки днів Равлик зможе виповзти з колодязя
// функція приймає 1 параметр глибину колодязя, функція повертає кількість днів яку равлик витратив на шлях.
// за день Равлик проповзає на 7 м в гору, а за ніч опускається на 2 м в низ
// для вирішення завдання використовуй цикл while

// 42 м, виповзе за 8 днів
// 17 м, виповзе за 3 дні
// 18 м, виповзе за 4 дні

// function getDays(depth) {
//   const daySpeed = 7;
//   const nightSpeed = 2;
//   let days = 0;
//   let total = 0;

//   while (total < depth) {
//     days += 1;
//     total += daySpeed; // 0 + 7 // 7

//     if (total < depth) {
//       total -= nightSpeed;
//     }
//   }

//   return days
// }
// console.log(getDays(17)); // 3
// console.log(getDays(42)); // 8
// console.log(getDays(18)); // 4

// СПРОБУЙТЕ ВИРІШИТИ З DO WHILE

// Task - 3
// Порахуй скільки голосних літер у реченні.

function countVowel(str) {
  const vowels = "aeiou";
  let count = 0;

  str = str.toLowerCase();



  for (let i = 0; i < str.length; i += 1) {
    if (vowels.includes(str[i])) {
      count += 1;
    }
  }
  return count;
}
// console.log(countVowel("HELLO WORLD")) // 3
// console.log(countVowel("Junior Web Developer")); // 8
