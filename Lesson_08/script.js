// ******************************Деструктуризація масива***************************************\\
// const arr = [1, 2, 3, 4, 5];

// const [first, second, third] = arr;

// // console.log(first)
// // console.log(second)
// // console.log(third)

// const [,,,,last] = arr;
// console.log(last)
// console.log(arr)

// ******************************Деструктуризація об'єкта***************************************\\
// const user = {
//     name: 'Test name',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }
// const skills = ['html', 'css', 'js'];

// const {skills: userSkills} = user;
// console.log(user)
// console.log(skills)
// console.log(userSkills)

// const {skills, name} = user;

// const name = user.name;
// const skills = user.skills

// ************************Глибока деструктуризація об'єкта***************************************\\

// const user = {
//     name: 'Test name',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     },
//     languages: {
//         ukrainian : true,
//         spanish: false
//     },
//     sayHello(){
//         console.log(this)
//         console.log('hello')
//     }
// }

// const {skills : {
//     html: skillHTML, css, js
// }, skills, languages : {
//     ukrainian, spanish
// }, sayHello} = user;

// console.log(ukrainian)
// console.log(sayHello)
// sayHello()
// user.sayHello()

// *********************Деструктуризація об'єкта в параметрах функції******************************\\

// const user = {
//     name: 'Test name',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }

// *********Без деструктуризації
// function getUserName(obj) {
//     console.log(`Hello my name is ${obj.name}, I know html - ${obj.skills.html}, css - ${obj.skills.css} and js -${obj.skills.js}`);
// }

// getUserName(user)

// *********З деструктуризацією
// const user = {
//   name: "Test name",
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };
// function getUserName({name, skills: {html, css,js}= {}} = {}) {
//   console.log(
//     `Hello my name is ${name}, I know html - ${html}, css - ${css} and js -${js}`
//   );
// }

// getUserName(user);

// *************************Деструктуризація об'єкта в циклі***********************************\\

// const users = [{ name: "Kate" }, { name: "Alex" }, { name: "Mark" }];

// function getAllPropValues(prop) {
//   const result = [];
//   for (const user of users) {
//     if (user.hasOwnProperty(prop)) {
//       // prop in user

//       result.push(user[prop]);
//     }
//   }

//   return result;
// }
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("qwerty"));



// ********Без деструктуризації*******
// const names = [];

// for (const user of users) {
//     names.push(user.name)
// }

// console.log(names);

// ********З деструктуризацією*********
// const names = [];

// for (const {name} of users) {
//     names.push(name)
// }

// console.log(names);

// *************************Операція rest та spread********************************\\

// const numbers = [1, 2, 3];
// const copy = [...numbers]; //spread
// console.log(numbers === copy)

// const numbers = [1, 2, 3];
// const [first, ...args] = numbers; // rest
// console.log(first)
// console.log(args)

// ************Операція rest та spread в функціях********************************\\

// const numbers = [1, 2, 3];

// function foo(...props){//rest [1,2,3]

// }
// foo(...numbers)// spread // 1 , 2 ,3

// const names = ['Alice', 'Kate', 'Emma'];

// function foo(first, second, third) {
//     console.log('first', first);
//     console.log('second', second);
//     console.log('third', third);
// }

// foo(...names) // foo('Alice', 'Kate', 'Emma')// spread

// const names = ['Alice', 'Kate', 'Emma'];
// function foo(first, second, ...args) { //rest
//     console.log(first);
//     console.log(second);
//     console.log(args);
// }

// foo('Alice', 'Kate', 'Emma', 'Mia', 'Lily')

// const user = {
//     name: 'Test name',
//     age: 22,
//     city: 'Lviv',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }

// function foo({ name, age, ...props }) {
//     console.log(name);
//     console.log(age);
//     console.log(props);
// }
// foo(user)

// const user = {
//     name: 'Test name',
//     age: 22,
//     city: 'Lviv',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }

// function foo({ name, skills: {html, ...props2}, ... props}) {
//     console.log(name);
//     console.log(html);
//     console.log(props);
//     console.log(props2);
// }
// foo(user)

// ПЕРЕРВА ДО 21.00

// Task - 1 - Деструктуризація
// Деструктуризуй об'єкт таким чином щоб отримати значення name, surname, username

// const user = {
//     id: 1,
//     username: 'harry_potter',
//     profile: {
//       name: 'Harry',
//       surname: 'Potter',
//       age: 25
//     }
//   };

// Деструктуризація об'єкта для отримання окремих змінних
// const  {username, profile : {name , surname}} = user;

// Виведення отриманих значень
// console.log(`Ім'я користувача: ${name}`);
// console.log(`Прізвище користувача: ${surname}`);
// console.log(`Ім'я користувача (за нікнеймом): ${username}`);

// Task - 2 Деструктуризація
// Допиши функцію таким чином щоб кожна властивість об'єкта product була незалежним параметром

// const product = {
//     name: 'Smart TV',
//     price: 25000,
//     category: 'Electronics',
//     details: {
//       brand: 'Samsung',
//       color: 'Black',
//       weight: '15.5'
//     }
//   };

// function displayProductInfo({name, price, category, details: {brand, color ,weight} = {}} = {}) {
//     console.log(`Назва товару: ${name}`);
//     console.log(`Ціна: ${price} грн`);
//     console.log(`Категорія: ${category}`);
//     console.log('Деталі:');
//     console.log(`- Бренд: ${brand}`);
//     console.log(`- Колір: ${color}`);
//     console.log(`- Вага: ${weight} кг`);
// }

// displayProductInfo();

// Task - 3 - Операція spread
// Напиши функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданими властивостями id та createdAt, а також list зі значенням "default" якщо в partialContact немає такої властивості.

// function createContact(partialContact) {
//   return {
//     id: Date.now(),
//     createdAt: new Date(),
//     list: "default",
//     ...partialContact,
//   };
// }

// console.log(
//   createContact({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );
// console.log(
//   createContact({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );

// Task - 4 - Операція rest
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.

// function transformUsername({ firstName, lastName, ...props }) {
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...props,
//   };
// }

// function transformUsername(obj) {
//   const result = {};
//   for (const prop in obj) {
//     if (prop === "firstName" || prop === "lastName") {
//       continue;
//     }

//     result[prop] = obj[prop];
//   }

//   result.fullName = obj.firstName + " " + obj.lastName;

//   return result;
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: "Jacob",
//     lastName: "Mercer",
//     email: "j.mercer@mail.com",
//     friendCount: 40,
//   })
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: "Adrian",
//     lastName: "Cross",
//     email: "a.cross@hotmail.com",
//     friendCount: 20,
//   })
// );

// Task - 5 Об'єкт параметрів
// Необхідно зрoбити рефакторинг функції calculateHousePerimeter, так щоб вона приймала об'єкт з параметрами будинку, включаючи довжини сторін будинку. Функція повинна розрахувати та повернути периметр будинку.

// function calculateHousePerimeter({ sideA: a, sideB: b, sideC: c, sideD: d }) {
//   const perimeter = a + b + c + d;
//   return perimeter;
// }

// const perimeter = calculateHousePerimeter({
//   sideA: 10,
//   sideB: 15,
//   sideC: 10,
//   sideD: 15,
// });
// console.log(`Периметр будинку: ${perimeter}`);
