/***** Оголошення змінних *****/
// const
// const value = 1;

// let
// let value;

// console.log('1',value)
// value = 1;

// console.log('2',value)

// value = 'hello'

// console.log('3',value)
// let a = 10;
// function foo() {
//   let a = 115;
//   function boo() {

//     console.log("boo", a);

//     return a;
//   }

//   console.log("foo", a);
//   return boo();
// }
// foo();
// console.log("global", a);

// (function () {
//   console.log("hello");
// })();
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE?retiredLocale=uk

// var
// var value

// console.log(value)
// var value = 10;
// var value = 10;
// var value = 10;
// var value = 10;

// function foo(){
//     var a = 10;

// }
// foo()
// console.log(a)

/***** Примітивні типи даних ****/

// Number

// const value = 1;
// const value2 = 2.5;
// const value3 = NaN;

// String

// const str = `${value}`;
// const str1 = 'some text "Say" ';
// const str2 = "";

// Boolean

// null

// undefined

/***** Методи для роботки з числами (тип даних Number) *****/

// Number
// const value = 'a26.4545'

// console.log(Number(value))

// Number.parseInt()
// console.log(Number.parseInt(value))

// Number.parseFloat()

// console.log(Number.parseFloat(value))

// Number.isNaN()  та метод isNaN()

// console.log(null === null)
// console.log(undefined === undefined)
// console.log(NaN === NaN)

// const value = 'a26.4545'
// console.log(Number.isNaN(value))//string

// console.log(isNaN(value))// Number(value)

// console.log(100 + undefined)
// if(isNaN(100 + 25)){
//     console.log('Can`t be placed')
// }

// const totalPrice = 100;
// const delivery = 'not found';

// const result = totalPrice + delivery;

// console.log('Total sum', result)

// console.log(Number.isNaN(Number(result)))
// console.log(isNaN(result))

// console.log(Number.isNaN(value))//NaN
// console.log(isNaN(value)) //

/***** Functions *****/

// Function expression
// add(5, 22)
// var add = function(a, b = 0){
//     console.log(a)
//     console.log(b)
// }
// console.log(add)

// function getTotal(sum,delivery){
//     return `Total sum ${sum+ delivery}`
// }

// console.log(getTotal(100,25))

// Function declaration
// add(10, 20)
// function add(a,b  = 0){
// console.log(a)
// }

// ************ПРАКТИКА******* //

// console.log(0 == true); // 0 == 1

// console.log(null == false)

// console.log(Boolean(null) === false) // Boolean(null) => false

// console.log(1 === true);

// console.log('0' == false);s

// console.log('0' === false);

// console.log(!0 === true)

// console.log(!0)

// console.log(Boolean(""))
// console.log(!!undefined)

// console.log(Boolean("") === !!undefined);

// console.log('world' < 'worlD');

// console.log('hello' > 'hello world');

// console.log(!!NaN)

// console.log(!!NaN == false)

// console.log('  some value' === 'some value');

// console.log(null == undefined);

// console.log(null === undefined);

// console.log(null == 0);
// console.log(null > 0);
// console.log(null < 0);

// console.log(null >= 1);
// console.log(null <= 1);
// console.log(null >= 0);

// console.log(null === 0)

// console.log(Number(null))

// console.log(typeof null)

// Task - 1

// Сума цифр числа

// Напишіть функцію sumOfDigits, яка приймає одне ціле число (гарантовано трьох значне) як аргумент. Функція повинна повертати суму всіх цифр у числі.

// function sumOfDigits(value) {
//   const toString = value.toString();

//   return Number(toString[0]) + Number(toString[1]) + Number(toString[2]);
// }

// console.log(sumOfDigits(123)); // 1 + 2 + 3 = 6
// console.log(sumOfDigits(987)); // 9 + 8 + 7 = 24

// Task - 2

// Напишіть функцію getLastDigit, яка приймає ціле число як аргумент і повертає останню цифру цього числа. Вам дозволяється використовувати тільки математичні операції.

// function getLastDigit(value){
// return Math.abs(value % 10)
// // const str = value.toString();
// // return Number(str[str.length - 1])
// }

// 123 % 10
// 12 = 120

// console.log(getLastDigit(123)); // 3
// console.log(getLastDigit(-456)); // 6
// console.log(getLastDigit(7890)); // 0

// Task - 3
// Напишіть функцію qwerty, яка приймає температуру у градусах Цельсія як аргумент і повертає температуру у градусах Фаренгейта. Формула для переведення:
// F = C * 9/5 + 32.

// function qwerty(celsius) {
//   return celsius * 9 / 5 + 32;
// }

// console.log(qwerty(0)); // 32
// console.log(qwerty(100)); // 212
// console.log(qwerty(-40)); // -40

// Task - 4
// Напишіть функцію convertMilesToKilometers, яка приймає відстань у милях як аргумент і повертає відстань у кілометрах. Одна миля відповідає приблизно 1.60934 кілометрам.

// function convertMilesToKilometers() {
//     //  0 - 1
//   Math.floor(Math.random(0) * (max - min + 1)) + min;
//   const miles = Math.floor(Math.random() * (160 - 0 + 1) + 0);
//   console.log(miles);
//   //   const DIFFERENCE_IN_KILOMETERS = 1.60934;
//   //   const answer = Number(prompt(`${miles} miles in km ?`));
//   //   const kilometers = Math.floor(miles * DIFFERENCE_IN_KILOMETERS);

//   //   return answer === kilometers;
// }

// console.log(convertMilesToKilometers(5));

// const value = '24.5px'
// Number() //NaN
// Number.parseInt() // 24
// Number.parseFloat() // 24.5

// let result = 25;
// console.log(result)

function isAdult(years) {
  let result = false;
  if (years >= 18) {
    result = true;
  }

  return result;
}

console.log(isAdult(18));

const years = 18;
let result = false;
if (years >= 18) {
  result = true;
}

console.log(result);
