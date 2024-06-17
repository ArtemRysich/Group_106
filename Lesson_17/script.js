// *********** localStorage *************** \\
// const LS_KEY = "Array of names";
// const names = ["Alice", "Kate", "Emma"];

// *****Збереження в LS***** \\

// localStorage.setItem("Array of names", JSON.stringify(names));

// *****Читання з LS***** \\

// const value = localStorage.getItem('Array of names');
// console.log(typeof value);
// console.log(JSON.parse(value));

// const someValue = 11;
// console.log(someValue)

// try {
//   console.log(someValue);
// } catch (error) {
//   console.error(error);
// } finally {
//     spinner.close()
//     console.log('finally')
// }

// console.log("after try catch");

// *****Видалення з LS***** \\

// localStorage.removeItem('tye')

// *****Очищення LS******* \\

// localStorage.clear()

// ***Чому варто завжди використовувати метод JSON.stringify***\\

// const LS_KEY = 'Array of names';
// const names = ['Alice', 'Kate', 'Emma'];

// localStorage.setItem(LS_KEY, names);
// const value = localStorage.getItem(LS_KEY);
// console.log(value);
// console.log(JSON.parse(value));

// ***LS не може зберігати функції в жодній з їх інтерпретацій***\\.

// const LS_KEY = "my function";

// function add(a, b) {
//     return a + b;
// }
// console.log('original', add)
// localStorage.setItem(LS_KEY, add)
// console.log(localStorage.getItem(LS_KEY));

// const calculator = {
//     a: 5,
//     b: 10,
//     add() {
//         return this.a + this.b
//     }
// }

// localStorage.setItem(LS_KEY, JSON.stringify(calculator))
// console.log(localStorage.getItem(LS_KEY));

// *************Практика*************** \\
// Застосувати готові стилі з файлу style.css
// Потрібно створити інтернет-магазин в якому буде 2 сторінки.

// Сторінка Home має:
// 1 Містити картки товарів
// (приклад однієї картки https://prnt.sc/klV2uzLIcG8w)
// 2 На списку товарів реалізовано делегування подій на додавання товару в кошик
// 3 Для додавання товару в кошик використовуй LS
// 4 Під час додавання контролюй кількість доданих товарів, для цього створи в об'єкті доданого товару новий ключ quantity

// Сторінка Checkout має:
// 1 Список карток доданих товарів, кожна картка має містити кількість куплених товарів та загальна вартість за даний товар.
// (приклад однієї картки https://prnt.sc/ssZA4rzw1x9L)
// 2 Повідомлення про загальну вартість покупки, якщо кошик порожній, то повідомлення "Your basket is empty"
// 3 Кнопку для очищення кошика, після натискання на неї всі товари видаляються, а користувача перенаправляємо на сторінку Home

const products = [
  {
    id: 3,
    img: "https://static.dnipro-m.ua/cache/products/1335/catalog_origin_325102.jpg",
    name: "Шліфмашина",
    price: 1299,
    description:
      "Кутова шліфувальна машина Dnipro-M GS-98 – модель, яка поєднує в собі оптимальне співвідношення потужності, ваги та мобільності. Конструкція шліфмашини сприяє зручній та надійній роботі, навіть однією рукою. Інструмент ідеально підходить для виконання різу на висоті та використання у важкодоступних місцях. Низький рівень шуму та вібрації, двопозиційне розташування додаткової рукоятки під кутом 100 градусів, мінімізує втому під час шліфування.",
  },
  {
    id: 4,
    img: "https://static.dnipro-m.ua/cache/products/8284/catalog_origin_322127.jpg",
    name: "Пила",
    price: 11049,
    description:
      "Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL призначена для обрізання зайвих гілок, спилювання дерев та чагарника, заготівлі дров, покрою будматеріалів та демонтажних робіт. Її просто використовувати у будь-яких місцях: на висоті, на виїзних роботах, у лісі або саду. При цьому Вам не потрібно буде турбуватися про підключення до мережі.",
  },
  {
    id: 5,
    img: "https://static.dnipro-m.ua/cache/products/2024/catalog_origin_323413.jpg",
    name: "Рівень",
    price: 897,
    description:
      "Рівень серії ProVision виробництва DNIPRO-M має не тільки високу точність вимірювань і чудові захисні властивості, а й надає максимальний комфорт користувачеві в процесі експлуатації.",
  },
  {
    id: 6,
    img: "https://static.dnipro-m.ua/cache/products/6566/catalog_origin_316315.jpg",
    name: "Тример",
    price: 3699,
    description:
      "Тример електричний Dnipro-M 110 призначений для покосу густої трави, а також кущів з діаметром стовбура до 10 мм.",
  },
  {
    id: 7,
    img: "https://static.dnipro-m.ua/cache/products/6483/catalog_origin_325859.jpg",
    name: "Мотокоса",
    price: 11049,
    description:
      "Мотокоса Dnipro-M 43 призначена для покосу трави, чагарників, бур'янів, газонів, а також для заготівлі сіна в невеликих масштабах.    Використовується для польових робіт на садовій ділянці площею до 2000 м2.",
  },
  {
    id: 8,
    img: "https://static.dnipro-m.ua/cache/products/2745/catalog_origin_319770.jpg",
    name: "Генератор",
    price: 10890,
    description:
      "Бензиновий генератор GX-25 номінальною потужністю 2,5 кВт забезпечить автономність побутових приладів на дачі або у приватному будинку. Ви зможете одночасно підключити до нього освітлення, холодильник, зарядку телефону, ноутбук та водяний насос.",
  },
];

const list = document.querySelector(".js-list");
const LS_KEY = "checkout";

list.insertAdjacentHTML("afterbegin", createMarkup(products));
list.addEventListener("click", handlerAddToBasket);

function handlerAddToBasket(evt) {
  if (!evt.target.classList.contains("js-add")) {
    return;
  }

  const product = evt.target.closest(".js-product");
  const productId = Number(product.dataset.productId);
  const currentProduct = products.find(({ id }) => id === productId);
  const basket = JSON.parse(localStorage.getItem(LS_KEY)) ?? [];
  const idx = basket.findIndex(({ id }) => id === productId);

  if (idx !== -1) {
    basket[idx].qty += 1;
  } else {
    currentProduct.qty = 1;
    basket.push(currentProduct);
  }

  localStorage.setItem(LS_KEY, JSON.stringify(basket));
}

function createMarkup(arr) {
  return arr
    .map(
      ({ id, img, name, price, description }) => `
       <li class="product-card js-product" data-product-id="${id}">
        <img src="${img}" alt="${name}" class="product-img" />
        <h2 class="product-title">${name}</h2>
        <p class="product-description">${description}</p>
        <p class="product-price">${price} грн</p>
        <button type="button" class="product-add-btn js-add">Add to basket</button>
      </li>
 `
    )
    .join("");
}
