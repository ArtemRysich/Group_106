//*********Приклад роботи синхронного та асинхронного JS**************\\

// console.log("A"); // синхрон  ---- 1

// setTimeout(() => console.log("B"), 0);// макро процес ----- 4

// Promise.resolve("C").then((value) => console.log(value));// мікро процес ---- 3

// console.log("D");  // синхрон  ---- 2

//*********Поділення асинхронного JS на мікро та макро процеси**************\\

// ******Мікро процеси***** \\
// Promise
// Observer
// addEventListener

// ******Макро процеси****** \\
// setTimeout
// setInterval
// https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate
// setImmediate
// https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
// requestAnimationFrame

//*********Приклад роботи синхронного та асинхронного JS**************\\
// Пронумеруй виклики методів відповідно до порядку їх виконання

// console.log("A"); //синхрон  ---- 1

// setTimeout(() => console.log("B"), 0); // макро процес --- 5

// Promise.reject("C")
// .then((value) => console.log(value))
// .catch(err => console.log(err)); // мікро процес ----4
// Promise.resolve("D").then((value) => console.log(value)); // мікро процес ----3

// setTimeout(() => console.log("E"), 0); // макро процес ---- 6

// console.log("F"); //синхрон  ---- 2

//*************** Promise *******************\\

// ****Створення Promise**** \\

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const isLight = confirm("Маєш світло ?");

//     if (isLight) {
//       resolve("Проводжу урок");
//     } else {
//       reject("Маєш пояснити чому так");
//     }
//   }, 4000);
// });

// // ****Обробка Promise**** \\
// promise
//   .then((response) => console.log(response))
//   .then(() => console.log("second then"))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("after all"));

// fetch("https://swapi.dev/api/films/1")
//   .then((resp) => resp.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// ****************************Практика************************* \\
// Наше завдання написати програмне забезпечення для ігрового автомата
// Для вирішення завдання використай готову розмітку HTML та базову стилізацію
// Після натиснення на кнопку "Start game" в кожному віконці по черзі має з'являтись смайлик з затримкою в 1 секунду ('🤑' або '👿')
// Під час обробки кожного віконця створи масив з Promis-ами в якому кожен з них буде відповідати за своє віконце, після чого оброби даний масив за допомогою методу Promise.allSettled
// Після того як всі віконця були заповнені потрібно щоб скріпт автоматично визначав чи гравець переміг, чи ні. Якщо в кожному віконці однаковий смайлик це означає що користувач переміг
// Виводить модальне вікно з повідомленням про статус гри ('Winner' або 'Loser')
// Для модального вікна використовуй бібліотеку basicLightbox
// Після повторного натискання на кнопку "Start game" поле має очищатись, а гра починатись з початку.

const elements = {
  startBtn: document.querySelector(".js-start"),
  container: document.querySelector(".js-container"),
};

elements.startBtn.addEventListener("click", handlerStart);

function handlerStart() {
  const promises = [...elements.container.children].map((_) => createPromise());
  Promise.allSettled(promises).then((items) => {
    items.forEach((item, i) => {
      elements.container.children[i].textContent = "";
      setTimeout(() => {
        elements.container.children[i].textContent = item.value || item.reason;

        if (i === items.length - 1) {
          console.log(isWinner);

          const instance = basicLightbox.create(
            `
            <h1>${isWinner ? "Winner" : "Loser"}</h1>
            `,
            {
              handler: null,
              onShow(instance) {
                this.handler = handlerCloseModal.bind(instance);
                window.addEventListener("keydown", this.handler);
              },
              onClose() {
                window.removeEventListener("keydown", this.handler);
              },
            }
          );
          instance.show();
        }
      }, 1000 * i);
    });

    const isWinner =
      items.every(({ status }) => status === "fulfilled") ||
      items.every(({ status }) => status === "rejected");
  });
}

function createPromise() {
  return new Promise((res, rej) => {
    const random = Math.random();
    if (random > 0.5) {
      res("🤑");
    } else {
      rej("😈");
    }
  });
}

function handlerCloseModal(evt) {
  if (evt.code === "Escape") {
    this.close();
  }
}
