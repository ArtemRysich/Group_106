// Що таке масив
// const array = ["Hello world", null , true, 15];
// console.log(array)

// Перевірка масиву
// console.log(typeof array); // object
// console.log(Array.isArray(array)); // true
// console.log(Array.isArray("hello")); // false

// Перший та останій елемент масиву
// const firstEl = array[0];
// const lastIdx = array.length - 1;
// const lastEl = array[lastIdx];
// console.log(lastEl)

// Перебір масиву
// const array = ["Hello world", null, true, 15];

// Цикл for
// for (let i = 0; i < array.length; i+=1){
//     const item = array[i]
//     console.log(item);
// }

// Цикл for of
// for(const item of array ){
//     console.log(item);
// }

// Присвоєння за посиланням та за значенням
// Примітивні типи даних - за значенням

// Складні типи даних - за посиланням

// ПРИМІТИВИ ЗА ЗНАЧАННЯМ !!!!

// let a = 1;

// let b = a;

// a += 1;

// console.log("a", a);

// console.log("b", b);

// console.log(a === b);

//
// const b = a;

// a[0]= 55;

// console.log(a)

// console.log('b', b);

// Методи для роботи з масивом
// const a = [1, 2, 3, 'hello'];

// a = [4,5,6]
// a[0] = 55;
// console.log(a)

// push pop
// console.log(a.push( [99, 4,5,6,7,8]))

// console.log(a)
// console.log(a)
// console.log(a.pop())
// console.log(a)

// unshift shift

// console.log(a.unshift(0))

// console.log(a.shift())
// console.log(a)

// slice

// console.log(a.slice())
// console.log(a[0])

// console.log(a)

// const a = [1, 2, 3, "hello"];
// // splice

// console.log(a.splice(1,1, 98,97))
// a.splice(2,0, [{value: true}])
// console.log(a);

// includes

// console.log(a.includes(99))

// indexOf

// console.log(a.indexOf(99))

// const a = [1, 2, 3, "hello"];
// // concat
// console.log(a.concat(  [4,5],true, [6,7]))
// console.log(a.push([4,5], [6,7]))

// console.log(a)

// Task-1
// Напиши скрипт який буде перебирати масив та видаляти з нього (мутувати) всі елементи що не є типом даних Number.

const arr = [3, "Hello", null, 42, false, false, "okay"];
// console.log(arr);
// for (let i = 0; i < arr.length; i += 1) {
//   // console.log(arr[i], typeof arr[i] !== 'number')
//   if (typeof arr[i] !== "number") {
//     arr.splice(i, 1);
//     i -=1;
//   }
// }
// console.log(arr);

// for (let i = arr.length - 1; i >= 0; i -= 1) {
//   if (typeof arr[i] !== "number") {
//     arr.splice(i, 1);
//   }
// }
// console.log(arr);

// Task-2
// Потрібно створити функцію яка буде приймати 1 параметр
// Функція повина відібрати з масиву тільки ті елементи що дублюються в ньому та повернути їх в вигляді нового масиву як результат виконання функції

// function getCommonElements(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr.includes(arr[i], i + 1) ) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }

// console.log(getCommonElements([1, 2, 3, 2, 1, 2, 17, 19]));

// Task-3
//Потрібно створити функцію яка буде приймати 2 параметри
//1 параметр це масив всіх юзерів
//2 параметр це масив з чоловічими іменами.
//Функція повина відібрати з масиву всіх юзерів лише жіночі імена та повернути їх в результаті свого виканання.

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
//   for (const user of users) {
//     if (!men.includes(user)) {
//       women.push(user);
//     }
//   }

//   return women;
// }

// console.log(getWomen(users, men));

// Task-4 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок літер) і виводить його в консоль.

// const string = 'Welcome to the future';

// console.log(string.split('').reverse().join(''))

// Task-5
// Напиши скрипт який буде перевіряти чи елементи в масиві розташовані в порядку зростання,
// якщо ні то замінювати елементи на вірнi
// const numbers = [1, 2, 3, 1, 5, 6, 1, 1, 9];

// for (let i = 1; i < numbers.length; i += 1) {
//   const currentEl = numbers[i];
//   const prevEl = numbers[i - 1];
//   if (currentEl <= prevEl) {
//     numbers[i] = prevEl + 1;
//   }
// }
// console.log(numbers);
// Task-6
// Напиши функцію яка на основі масиву користувачів що поставили лайк формує та повертає рядок.
// Функцію має повернути текст, як вказано у прикладах:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// function createStr(arr) {

// }

// console.log(createStr([]));
// console.log(createStr(["Peter"]));
// console.log(createStr(["Jacob", "Alex"]));
// console.log(createStr(["Max", "John", "Mark"]));
// console.log(createStr(["Mark", "Alex", "Jacob", "Mark"]));

// const a = [1, 2, 3];

// // const b = a.slice();
// // const b = Array.from(a);
// const b = [...a];

// console.log("a", a);
// console.log("b", b);

// console.log(a === b);

// як в цьому прикладі правильно задати (length )  щоб він виводив кількість в кінці рядка? на прикладі цієї функції : як в цьому прикладі правильно задати (length )  щоб він виводив кількість в кінці рядка? на прикладі цієї функції
function getLength(array) {
    const toString = array.join("")
  return `${toString} length in string ${toString.length}`;
}
console.log(getLength(["Mango", "hurries", "to", "the", "train"]));
console.log(getLength(["M", "a", "n", "g", "o"]));
console.log(getLength(["top", "picks", "for", "you"]));
