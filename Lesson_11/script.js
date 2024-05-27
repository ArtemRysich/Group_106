// Agenda
// 1 Повторення типів функцій
// 2 ПРАВИЛА ВИЗНАЧЕННЯ THIS
// 3 call apply bind

// ***********Повторення типів функцій*************\\
// **Function declaration**
// 'use strict'
// function fnDeclaration() {
//     console.log(this)
//     // console.log(this.hello);
// }

// fnDeclaration()

// **Function expression**
// 'use strict'
// const fnExpression = function () {
//     console.log(this);
// }

// fnExpression()

// **Arrow function**
// 'use strict'
// const fnArrow = () => {
//     console.log(this);
// }

// fnArrow()

// ПРАВИЛА ВИЗНАЧЕННЯ THIS
// 1 Визначити з яким типом функції працюємо
// 2 Маємо умовне поділення на два табори
// 2.1 Перший це Function Declaration & Function Expression
// 2.2 Другий це Arrow Function
// 3 Function Declaration & Function Expression визначають this тим хто їх викликав, перший ліворуч
// 4 Arrow Function в рамках чого вона була створена

// *****Function declaration*****\\
// const person = {
//     name: 'Alice',
//     hello() {
//         console.log(this);
//         console.log(this.name);
//     }
// }
// person.hello()

// *****Function Expression*****\\
// const person = {
//     name: 'Alice',
//     hello: function () {
//         console.log(this);
//         console.log(this.name);
//     }
// }
// person.hello()

// *****Arrow Function*****\\
// window.alert('hello')
// const hello = () => {
//     console.log(this);
//   };
// const person = {
//   name: "Alice",
//   wrapper() {

//     hello();
//   },
// };
// person.wrapper();

// const objA ={
//     name: 'Alice',
//     objB: {
//         name: 'Kate',
//         objC: {
//             name: 'David',
//             hello: () => {
//                 console.log(this)
//             }
//         }
//     }
// }

// objA.objB.objC.hello()

// const person = {
//     name: 'Alice',
//     hello() {
//         console.log('1', this); // person

//         const arrowFn = () => {
//             console.log('arrowFn', this); // person
//         }
//         arrowFn();
//     }
// }
// person.hello()

// const objA = {
//   name: "Alice",
//   hello() {
//     console.log(this);
//   },
// };

// const objB = {
//     name: 'Kate',
//     hello: objA.hello
// }

// const fn = objB.hello
// fn()
// console.log(fn)

// const objA = {
//     name: "Alice",
//     hello: () => {
//       console.log(this.name);
//     },
//   };

//   const objB = {
//     name: "Kate",
//     hello: objA.hello,
//   };
//   objB.hello();

// const objA = {
//   name: "Alice",
//   hello: () => {
//     console.log(this.name);// error
//   },
// };

// const objB = {
//   name: "Kate",
//   hello() {
//     objA.hello();
//   },
// };
// objB.hello();'

// const objA = {
//   name: "Alice",
//   fn: () => {
//     console.log(this)// undefined
//     return {
//       name: "Kate",
//       hello: () => {
//         console.log(this.name); // error
//       },
//     };
//   },
// };

// const result = objA.fn();

// result.hello();

// ПЕРЕРВА 21.05

// ***********call apply bind*********** \\

// *****call***** \\
// const bmw = {
//   brand: "BMW",
//   speed: 100,
// };

// const audi = {
//   brand: "Audi",
//   speed: 80,
// };

// function drive(action, place) {
//   console.log(
//     `${this.brand} їде зі швидкістю ${this.speed} км/год. ${action}, прямує на ${place}`
//   );
// }

// drive.call(bmw, 'Увімкнути ближнє світло', 'СТО');
// drive.call(audi, "Увімкнути клімат-контроль", "СТО");

// *****apply***** \\

// const bmw = {
//     brand: 'BMW',
//     speed: 100,
// };

// const audi = {
//     brand: 'Audi',
//     speed: 80,
// };

// function drive(action, destination) {
//     console.log(`${this.brand} їде зі швидкістю ${this.speed} км/год я рухаюсь в місто ${destination}. ${this.brand} - ${action}`);
// }

// drive.apply(bmw, ['Увімкнути ближне світло', 'Львів']);
// drive.apply(audi, ['Увімкнути клімат-контроль', 'Київ']);

// *****bind***** \\
// const bmw = {
//     brand: 'BMW',
//     speed: 100,
// };

// function drive(action, destination) {
//     console.log(arguments)
//     console.log(`${this.brand} їде зі швидкістю ${this.speed} км/год я рухаюсь в місто ${destination}. ${this.brand} - ${action}`);
// }

// const bmwDrive = drive.bind(bmw, 'GO', 'QWERTY');

// console.log(bmwDrive)

// bmwDrive('Увімкнути ближнє світло', 'Львів')
// bmwDrive('Увімкнути клімат-контроль', 'Київ')

// *************************Практика***************************\\

// Task - 1
// Наше завдання написати програмне забезпечення для автомобіля, а саме натискання кнопки набору та зниження швидкості в системі круїз контролю.
// Створити об'єкт cruiseСontrol з методами accelerate та decrease, властивостями speed та brand.
// const cruiseControl = {
//   speed: 40,
//   brand: "Audi",
//   accelerate() {
//     this.speed += 10;
//     console.log(
//       `Автомобіль ${this.brand} прискорюєтья. Поточна швидкість автомобіля ${this.speed}`
//     );
//   },
//   decrease() {
//     if (this.speed <= 0) {
//       console.log("Авто зупинилось");
//       return;
//     }

//     this.speed -= 10;
//     console.log(
//       `Автомобіль ${this.brand} гальмує. Поточна швидкість автомобіля ${this.speed}`
//     );
//   },
// };
// cruiseControl.accelerate();
// cruiseControl.accelerate();
// cruiseControl.decrease()
// cruiseControl.decrease()
// cruiseControl.decrease()
// cruiseControl.decrease()
// cruiseControl.decrease()
// cruiseControl.decrease()
// cruiseControl.decrease()

// Task - 2
// Потрібно створити систему для продажу в інтернет-магазині.
// В об'єкті продукту (product) потрібно створити метод discount(буде приймати знижку клієнта в %) та повертати вартість товару з врахуванням знижки
// В об'єкті клієнта (client) який містить ім'я та індивідуальну знижку, потрібно створити метод purchase, який буде викликати метод для розрахунку вартості товару та логувати повідомлення про покупку
// Alice придбала товар зі знижкою в 8%, сума до сплати 460грн"

// const product = {
//   name: "Smartphone",
//   price: 500,
//   discount(percent) {
//     return ((this.price * (100 - percent)) / 100).toFixed(2);
//   },
// };

// const client = {
//   name: "Alice",
//   discountPercent: 8,
//   purchase() {
//     const price = product.discount(this.discountPercent);
//     console.log(
//       `${this.name} придбала товар зі знижкою ${this.discountPercent}%, сума до сплати ${price} грн `
//     );
//   },
// };
// client.purchase();

// Task - 3
// Потрібно створити функціонал для контролю швидкості прокатних авто.
// Створіть функцію яка буде приймати 1 параметр (максимально дозволену швидкість)
// та виводити повідомлення, чи ми рухаємось з безпечною швидкістю чи перевищуємо, функція має опрацьовувати об'єкт автомобіля як this

// const SAFE_SPEED = 60;

// const tesla = {
//   brand: "Tesla",
//   speed: 30,
// };

// const audi = {
//   brand: "Audi",
//   speed: 70,
// };

// function speedSensor(maxSpeed) {
//   //   if (this.speed <= maxSpeed) {
//   //     return `${this.brand} рухається з безпечною швидкістю`;
//   //   }

//   //   return `${this.brand} - Перевищує безпечну швидкість 😱`;

//   return this.speed <= maxSpeed
//     ? `${this.brand} рухається з безпечною швидкість`
//     : `${this.brand} - Перевищує безпечну швидкість 😱`;
// }
// console.log(speedSensor.call(audi, SAFE_SPEED));

// console.log(speedSensor.call(tesla, SAFE_SPEED));

// const rentalAudi = speedSensor.bind(audi, SAFE_SPEED)
// console.log(rentalAudi())
// audi.speed = 40
// console.log(rentalAudi())

// const rentalTesla = speedSensor.bind(tesla, SAFE_SPEED)
// console.log(rentalTesla())
// tesla.speed = 100;
// console.log(rentalTesla())

// console.log(speedSensor.apply(audi, [SAFE_SPEED]));

// console.log(speedSensor.apply(tesla, [SAFE_SPEED]));

// Task-4 Калькулятор
// Створіть об'єкт calculator з трьома методами:

// read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.
// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   add() {
//     return (this.a ?? 0) + (this.b ?? 0);
//   },
//   mult() {
//     return (this.a ?? 0) * (this.b ?? 1);
//   },
// };
// calculator.read(4, 3);
// console.log(calculator);
// // console.log(calculator.add());
// console.log(calculator.mult());

// function hello() {
//     console.log(this.name);
//   }
// hello()
//   const objA = {
//     name: "Alice",
//   };

//   hello.call(objA)

// const objA = {
//     name: "Alice",
//     hello: () => {
//         console.log(this.name); // ''
//     },
// };

// const objB = {
//     name: "Kate",
//     hello() {
//         objA.hello();
//     },
// };

// objB.hello();

// const hello = function () {
//   console.log(this.name);
// };

// const objA = {
//   name: "Alice",
//   myName: function () {
//     console.log(this.name);
//   }
// };

// objA.myName();

// const objA = {
//   name: "Alice",
//   myName: function () {
//     console.log(this.name);
//   },
// };

// const objB = {
//   name: "Kate",
//   hello: objA.myName.bind(objA),
// };

// objB.hello();

// const hello = () => {
//   console.log(this.name);
// };

// const objA = {
//   name: "Alice",
//   myName: hello,
// };

// objA.myName();



class User {
    constructor(name){
        this.name = name
    }

    #sayHello(){
        console.log(this.name)
    }
}

const instance = new User('Alice');


instance.#sayHello()