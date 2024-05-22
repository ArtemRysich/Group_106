// Тестовий масив для теоретичного блоку

// ********map******** \\
// const names = users.map((item, idx, arr) => {
//   console.log(item);
//   return item.name;
// });
// console.log(names);

// const names = users.map(({ name }) => name);

// console.log(names);

// function customMap() {
//   const result = [];
//   for (let i = 0; i < array.length; i += 1) {
//     result.push(callback(array[i], i, array));
//   }
//   return result
// }

// const users = [
//     { id: 1, name: "John", age: 28, skills: ["JavaScript", "HTML", "CSS"] },
//     { id: 2, name: "Alice", age: 32, skills: ["Python", "Data Analysis"] },
//     { id: 3, name: "Bob", age: 24, skills: ["JavaScript", "React", "Node.js"] },
//     { id: 4, name: "Emily", age: 40, skills: ["Java", "Spring"] },
//     { id: 5, name: "David", age: 22, skills: ["C++", "C#"] },
//   ];
// ********flatMap******** \\

// const result = users.flatMap(({skills})=>{
//     return skills
// })

// const result = numbers.flatMap((number) => number)
// console.log(result)

// const result = users.flatMap(({skills})=> skills)
// console.log(result)

// ********flat******** \\

// const numbers = [1, 2, 3, 4, [5, 6, [7, 8]]];
// const result = numbers.flat(2);

// console.log(result);

// ********filter******** \\
// const users = [
//   { id: 1, name: "John", age: 28, skills: ["JavaScript", "HTML", "CSS"] },
//   { id: 2, name: "Alice", age: 32, skills: ["JavaScript", "Data Analysis"] },
//   { id: 3, name: "Bob", age: 24, skills: ["JavaScript", "React", "Node.js"] },
//   { id: 4, name: "Emily", age: 40, skills: ["Java", "JavaScript"] },
//   { id: 5, name: "David", age: 22, skills: ["JavaScript", "C#"] },
// ];

// const arr = users.flatMap(({ skills }) => skills);
// console.log(arr)
// const result = arr.filter((skill, idx, array) => array.indexOf(skill) === idx);
// const result = arr.filter((skill, idx, array) => !array.includes(skill,idx + 1));
// console.log(result);

// const result = users.filter((user, idx, arr) => {
//   if (user.age > 50) {
//     return true;
//   }
// });
// console.log(result);

// ********find******** \\
// const users = [
//     { id: 1, name: "John", age: 28, skills: ["JavaScript", "HTML", "CSS"] },
//     { id: 2, name: "Alice", age: 32, skills: ["Python", "Data Analysis"] },
//     { id: 3, name: "Bob", age: 24, skills: ["JavaScript", "React", "Node.js"] },
//     { id: 4, name: "Emily", age: 40, skills: ["Java", "Spring"] },
//     { id: 5, name: "David", age: 22, skills: ["C++", "C#"] },
//   ];

// const result = users.find(({skills}) => skills.includes("GraphQL"))

// console.log(result)
// ********findIndex********\\

// const idx = users.findIndex((user) => user.id === 3);
// console.log(idx);
// const result = users.find((user) => user.id === 3);
// console.log(result);

// ********some********\\

// const isKnow = users.some((user) => user.skills.includes("GraphQL"));
// console.log(isKnow);
// ********every ********\\

// const result = users.every((user) => user.age > 20 && user.age <= 40);
// console.log(result);
// ********sort********\\

// const users = [
//   { id: 1, name: "John", age: 28, skills: ["JavaScript", "HTML", "CSS"] },
//   { id: 2, name: "Alice", age: 18, skills: ["Python", "Data Analysis"] },
//   { id: 3, name: "Bob", age: 24, skills: ["JavaScript", "React", "Node.js"] },
//   { id: 4, name: "Emily", age: 40, skills: ["Java", "Spring"] },
//   { id: 5, name: "David", age: 22, skills: ["C++", "C#"] },
// ];

// users.sort((current, next) => next.age - current.age);
// console.log(users)
// const result = users.toSorted((current, next) => next.age - current.age)
// console.log(result)
// console.log(users)

// const result = users.toSorted((a,b) =>  b.name.localeCompare(a.name))
// // const result = users.toSorted((a, b) => a.name - b.name);
// console.log(result);

// ********reduce********\\

// const users = [
//   { id: 1, name: "John", age: 28, skills: ["JavaScript", "HTML", "CSS"] },
//   { id: 2, name: "Alice", age: 18, skills: ["Python", "Data Analysis"] },
//   { id: 3, name: "Bob", age: 24, skills: ["JavaScript", "React", "Node.js"] },
//   { id: 4, name: "Emily", age: 40, skills: ["Java", "Spring"] },
//   { id: 5, name: "David", age: 22, skills: ["C++", "C#"] },
// ];

//   const result = users.reduce((acc, item) => {
//     acc+= item.age

//     return acc
//   }, 0)

// const result = users.reduce((acc, item) => acc + item.age, 0);

// console.log(result);

// const result = users.reduce((acc, user) => {
//   acc.push(user.name);
//   return acc;
// }, []);

// const result = users.reduce((acc, user) => acc.push(user.name), []);
// console.log(result);

// ****************Практика**************** \\

// Task-1
// Напишіть функцію, яка використовує метод map, щоб створити новий масив об'єктів, в якому буде інформація про середній бал кожного студента.

// const students = [
//   { name: "John", grades: [80, 85, 90] },
//   { name: "Alice", grades: [90, 95, 92] },
//   { name: "Bob", grades: [70, 80, 75] },
//   { name: "Emily", grades: [95, 92, 88] },
//   { name: "David", grades: [] },
// ];

// function getAverage(arr) {
//   return arr.map(({ name, grades }) => {
//     const total = grades.reduce((acc, value) => acc + value, 0);
//     return {
//       name,
//       average: grades.length ? Math.round(total / grades.length) : total,
//     };
//   });
// }
// console.log(getAverage(students));

// Task-2
// Напишіть функцію, яка використовує метод filter, щоб створити новий масив, в якому будуть тільки студенти які старше 20 років

// const students = [
//   { name: "John", age: 20, gpa: 3.8 },
//   { name: "Alice", age: 21, gpa: 3.2 },
//   { name: "Bob", age: 19, gpa: 3.5 },
//   { name: "Emily", age: 22, gpa: 3.9 },
//   { name: "David", age: 20, gpa: 3.7 },
// ];

// function getAdult(arr) {
//   return arr.filter(({ age }) => age > 20).map(({ name }) => name);
// }
// console.log(getAdult(students));

// Task-3
// Напишіть функцію, яка використовує метод find, щоб знайти книжку за її назвою (title).
// Якщо книгу не знайдено повертається рядок 'Not found'.
// const books = [
//   {
//     title: "JavaScript: The Good Parts",
//     author: "Douglas Crockford",
//     year: 2008,
//   },
//   {
//     title: "Clean Code: A Handbook of Agile Software Craftsmanship",
//     author: "Robert C. Martin",
//     year: 2008,
//   },
//   {
//     title: "The Pragmatic Programmer: Your Journey to Mastery",
//     author: "Andrew Hunt, David Thomas",
//     year: 1999,
//   },
//   {
//     title: "Design Patterns: Elements of Reusable Object-Oriented Software",
//     author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
//     year: 1994,
//   },
//   {
//     title: "Refactoring: Improving the Design of Existing Code",
//     author: "Martin Fowler",
//     year: 1999,
//   },
// ];

// function getBook(arr, title) {
//   const book = arr.find(({ title: bookTitle }) => bookTitle === title);

//   //   return book ? book : 'Not found'
//   return book || "Not found";
// }
// console.log(
//   getBook(
//     books,
//     "Design Patterns: Elements of Reusable Object-Oriented Software"
//   )
// );
// console.log(getBook(books, "qwerty"));

// Task-4
// Напишіть функцію, яка використовує метод reduce, щоб обчислити загальну вартість всіх товарів у масиві, яка розраховується як добуток ціни товару на його кількість, а потім сумується з іншими товарами.
//  Результат повинен бути загальною вартістю всіх товарів.

// const products = [
//   { id: 1, name: "T-shirt", price: 20, quantity: 3 },
//   { id: 2, name: "Jeans", price: 50, quantity: 2 },
//   { id: 3, name: "Sneakers", price: 80, quantity: 1 },
//   { id: 4, name: "Hat", price: 15, quantity: 4 },
//   { id: 5, name: "Socks", price: 5, quantity: 6 },
// ];

// function getTotal(arr) {
//   return arr.reduce((acc, product) => {
//     acc += product.price * product.quantity;

//     return acc;
//   }, 0);
// }

// const getTotal = (arr) => arr.reduce((acc, { price, quantity }) => acc + price * quantity, 0);

// console.log(getTotal(products));

// Task-5
// Напишіть функцію, яка використовує метод sort, щоб відсортувати книжки за роком видання у спадаючому порядку.
// Результат повинен бути відсортованим масивом книжок за роком видання.

// const books = [
//     { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', year: 2008 },
//     { title: 'Refactoring: Improving the Design of Existing Code', author: 'Martin Fowler', year: 1999 },
//     { title: 'Clean Code: A Handbook of Agile Software Craftsmanship', author: 'Robert C. Martin', year: 2008 },
//     { title: 'The Pragmatic Programmer: Your Journey to Mastery', author: 'Andrew Hunt, David Thomas', year: 1999 },
//     { title: 'Design Patterns: Elements of Reusable Object-Oriented Software', author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides', year: 1994 },
// ];

// function sortDesc(arr) {
// return arr.toSorted((a, b) => b.year - a.year)
// }
// console.log(sortDesc(books));
// console.log(books)

// Task-6
// Напишіть функцію, яка використовує перебираючі методи масиву map та filter, щоб отримати масив назв продуктів, ціна яких менше 2 доларів та відсортуй їх за алфавітним порядком.
const products = [
  { id: 2, name: "Banana", price: 0.99 },
  { id: 1, name: "Apple", price: 1.99 },
  { id: 3, name: "Orange", price: 2.49 },
  { id: 4, name: "Grapes", price: 3.99 },
];

// function getProducts(arr) {
//   return arr
//     .filter(({ price }) => price < 2)
//     .map(({ name }) => name)
//     .sort((a, b) => a.localeCompare(b));
// }
// console.log(getProducts(products));
// console.log(products)

// const arr = ["A", "c", "B", "a", "C", "b"];
// console.log(arr.sort((a, b) => a.localeCompare(b)));
// console.log(arr.toSorted());

// Task-7 HARD 😈

// Є рядок в якому довільна кількість літер, гарантовано в рядку немає пробілів та розділових знаків, потрібно повернути об'єкт де кожна літера буде ключем, а кількість разів яку вона дублюється буде значенням ключа

// Результат на який очікуємо
// const obj = {
//     a: 3,
//     b: 4,
//     s: 3,
//     // ...
// }

// const str = "absdabsrgbadgtdswwbetflg";
// const result = str.split("").reduce((acc, item) => {
//   if (item in acc) {
//     //acc.hasOwnProperty(item)
//     acc[item] += 1;
//   } else {
//     acc[item] = 1;
//   }

//   return acc;
// }, {});

// console.log(result);

const filterArray = (numbers, value) => {
  const filteredNumbers = [];
  numbers.forEach(number => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });
  return filteredNumbers;
};
// Добрий вечір. Можна ще раз проговорити про параметри в callback functions. a, b одні і ті самі в обох функціях. Чому вони самі себе повторюють в двох функціях? (дякую)
 function logResult(a, b, callback) {
    console.log(callback);
    const result = callback(a, b);
    console.log(`Result is ${result}`);
  }
  logResult(4, 5, add);
  
  function add(a, b) {
    return a + b;
  }