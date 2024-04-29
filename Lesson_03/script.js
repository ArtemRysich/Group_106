// https://medium.com/trabe/using-switch-true-in-javascript-986e8ad8ae4f

/***** Логічні оператори *****/

// ||
// console.log(2 || 0 || 1);

// console.log(null || 0 || 'hello')

// console.log('' || null || 0)

// ?? реагує лише на null та undefined
// console.log(0 ?? 1);

// console.log(null ?? 1);

// console.log(undefined ?? 10);

// console.log(null ?? undefined ?? 5)

// console.log(undefined ?? null)

// &&
// console.log(false && 1);
// console.log(NaN && 2);

// console.log(1 && 5 && 23);
// console.log(1 && 5 && null);
// console.log(1 && 0 && 23);

// Приклади роботи

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log( 3 ||true || 4);

// console.log('' || false || 7);

// console.log(null || 2 || undefined);

// console.log('' ??  4);

// console.log(false ?? 7);

// console.log(null ?? 7);

// console.log(undefined ?? 7);

// console.log(0 || undefined && 7)
// console.log(0 && undefined || null)

/***** Інструкція if та її варіації *****/
// const value = 10;
// if (value > 5) { // value > 5 => true
//   console.log("condition is true");
// }
// console.log('after condition')

// if (7 && value) { // 7 && value => 10 => true
//     console.log("condition is true");
//   }
//   console.log('after condition')

// const value = 0;

// if (7 && value) { // 7 && 0 => 0 => false
//     console.log("condition is true");
//   }
//   console.log('after condition')

// const value = 10;
// if (value) {
//   console.log("condition is true");
// } else {
//   console.log("condition is false");
// }

// const sum = 2000;
// let discount = 0;

// if (sum >= 5000) {
//   discount = 10;
// } else if (sum >= 4000) {
//   discount = 8;
// } else if (sum >= 3000) {
//   discount = 6;
// }

// console.log(discount);

/***** Інструкція switch *****/

// const value =5;

// switch (value) {
//   case 5:
//   case 7:
//     console.log("5 || 7");
//     break;
//   case 10:
//     console.log("10");
//     break;
//   default:
//     console.log("another value");
// }

// const value = 10;
// switch (true) {
//   case 7 > value:
//     console.log('7 > 10');
//     break;
//   case 10 > value:
//     console.log('10 > 10');
//     break;

//   case 15 > value:
//     console.log('15 > 10');
//     break;
// }

/***** Тернарний оператор *****/

// condition ? true : false

// const value =10;

// const answer = 11 === value ? 'is true' : 'is false';

// console.log(answer)

/***** Області видимості *****/ //(Обов'язково !!!)

// Глобальна та локальна
// const
// let

// let value = 10;

// if (true) {
//   let value = 15;
//   console.log("1", value);

//   if (true) {
//     console.log("2", value);
//   }
// }
// console.log('global' , value)
//  Глобальна та функціональна
// var

// if (true) {
//   var value = 15;
// }

// console.log(value);

// function test() {
//   var value = 10;
// }
// test()
// console.log(value);

// let number = 10;

// if (true) {
//     number = 22;
// }
// console.log(number);

// let number = 10;

// if (true) {

//     if (true) {
//         number = 35;
//     }
//     number = 22;
// }
// console.log(number);

// let number = 10;

// if (true) {
//     let number = 22;
//     if (true) {
//         number = 35;
//     }

//     console.log('local' , number)
// }
// console.log(number);

// let number = 10;

// if (true) {
//     if (true) {
//         number = 35;
//     }
// let number = 22;
// }
// console.log(number);

// value = 22;

// let value = 10;

// var number = 10;

// if (true) {
//     var number = 15;
// }

// console.log(number);

// var number

// number = 10;

// if (true) {
//     number = 15;
// }

// console.log(number);

// function foo() {
//     var str = 'Hello world';
// }
// foo()
// console.log(str);

// function foo() {
//     var name = 'Hello world';
// }
// foo()
// console.log(name);

// let i = 10;
// if (true) {
//   var i = 50;
// }
// console.log(i);

// **************************************** Практика ****************************** //

// Task - 1
// Потрібно створити світлофор використовуючи конструкцію switch
// В propmt() юзер вводить колір який він бачить на світлофорі
// В результаті виконання юзер має отримати повідомлення з дією яку має виконати

// Можливі 4 стани світлофора
// 1 - red, action stop
// 2 - yellow, action ready
// 3 - green, action go
// 4 - Будь-який інший колір або значення відповідно світлофор не працює, action be careful

// let message = prompt("color ?");
// // let action;
// if (message) {
//   message = message.toLowerCase();
// }

// switch (message) {
//   case "red":
//     action = "stop";
//     break;
//   case "yellow":
//     action = "ready";
//     break;
//   case "green":
//     action = "go";
//     break;
//   default:
//     action = "be careful";
// }

// console.log(action);
// let action;
// if ("red" === message) {
//   action = "stop";
// } else if ("yellow" === message) {
//   action = "ready";
// } else if ("green" === message) {
//   action = "go";
// } else {
//   action = "be careful";
// }
// console.log(action);

// Task - 2
// Потрібно створити застосунок для автоматизації перевірки правильних відповідей на дитячі загадки
// Створи функцію яка буде приймати 2 параметри
// 1 параметр це текст загадки
// 2 вірна відповідь

// Після виклику функції користувач має побачити питання на екрані та поле для вводу відповіді, використовуй propmt()
// Функція має повертати булеве значення з результатом відповіді (true/false)

// function check(text, answer) {
//   let message = prompt(text);

//   if (message) {
//     message = message.toLowerCase();
//   }

//   switch (message) {
//     case answer:
//       return true;
//     default:
//       return false;
//   }

//   if (answer === message) {
//     return true;
//   }

//   return false;

//   return answer === message ? "вірно" : "не вірно";

// return answer === message; // true // false
// }

// console.log(
//   check("Хоч не літак, а крилатий, Без крил не може працювати.", "вітряк")
// );
// console.log(
//   check("Через воду він проводить, А сам з місця вік не сходить", "міст")
// );
// Тестові дані
// Хоч не літак, а крилатий,
// Без крил не може працювати.
// (Вітряк)

// Через воду він проводить,
// А сам з місця вік не сходить.
// (Міст)

// let result = 0;
// for (let i = 1; i <= 24; i += 1) {
//   result += i;
// }
// console.log(result)

// test = 22;

// console.log(test);

// function checkPassword(password) {
//   let checkPassword = 10;
//   return checkPassword;
// }
// console.log(checkPassword());
//   1. індетифікатор функції (checkPassword) ні як не заважає використання того ж самого
//   індетифікатора checkPassword у тілі цієї функції з будь яким ключовим словом(let/const), або
//   навіть без нього - чому? ( це вважається різними індетифікаторими і вони незалежні?), але якщо не давати ніякого ключового слова (let/const)
//   тоді виходить що він не був оголошений(чи function і є оголошенням?)б то як він працює.... checkPassword приймає var?
//    2. в той час як параметр (password) можна тільки перевизначити - тобто password = 10;
//   він не приймає const/let і видає (Identifier 'password' has already been declared)
//   3. чому така різниця між 1 та 2 ?

// function screenWidth(value) {
//   if (value <= 380) {
//     return "Mobile screen";
//   } else if (value > 380 && value <= 720) {
//     return "Tablet screen";
//   } else if (value > 720 && value <= 1280) {
//     return "Desktop screen";
//   } else {
//     return "Godzilla screen";
//   }
// }

// const result = screenWidth(320)

//   чи можна з цього коду зробити зміну екрану не через аргументи в screenWidth а динамічно від зміни екрану ?

// window.addEventListener("resize", (event) => {
//   console.log(screenWidth(event.currentTarget.innerWidth));
// });

// function sum(a, b) {
//   return a + b;
// }

// sum(5, 5);



// const message = "Welcome to Bahamas!";
// const index = message.indexOf("to");
// console.log(index); // 8



// const grade = 85;

// if (grade >= 70) {
//   console.log("Satisfactorily");
// } else {
//   console.log("Unsatisfactorily");
// }
