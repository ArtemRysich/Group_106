// ******Пошук HTML елементу за допомогою querySelector****** \\

// За назвою тегу
// const title = document.querySelector('h1');
// console.log(title)

// За назвою класу
// const title = document.querySelector('.js-title');
// console.log(title)

// За ID

// const title = document.querySelector('#title');
// console.log(title)
// console.dir(title)

// const title = document.querySelector('.js_title');
// console.log(title)

// ******Пошук HTML елементів за допомогою querySelectorAll****** \\

// const items = document.querySelectorAll('li')
// console.log(items)
// const items = document.querySelectorAll('.js-item')
// console.log(items)
// Перетворення колекції до масиву

// console.log(Array.from(items))
// console.log([...items])

// ******Створення HTML елементів за допомогою createElement****** \\

// const list = document.querySelector(".js-list");

// const li = document.createElement("li");
// const h2 = document.createElement("h2");

// h2.textContent = "Hello world";

// // li.append(h2)
// li.append(h2)
// list.prepend(li)

// ******Створення HTML елементів за допомогою шаблонної розмітки****** \\
// const list = document.querySelector(".js-list");
// const title = 'Hello world'

// const li = `<li> <h2>${title}</h2> </li>`;
// console.log(li)
// Метод insertAdjacentHTML

// list.insertAdjacentHTML('beforeend', `<li> <h2>${title}</h2> </li>`)

// Властивість innerHTML

// list.innerHTML = li

// const title = document.getElementById('title')
// console.log(title)

// const list = document.querySelector(".js-list");
// console.log(list.children)
// const dynamicArr = document.getElementsByClassName("js-item");
// const staticArr = document.querySelectorAll(".js-item");

// list.insertAdjacentHTML(
//   "beforeend",
//   '<li class="js-item">Item 4</li><li class="js-item">Item 5</li><li class="js-item">Item 6</li>'
// );

// console.log(dynamicArr);

// console.log(staticArr);

// ******Стилізація за допомогою властивості style****** \\

// const list = document.querySelector(".js-list");

// list.style.listStyle = 'none';
// list.style.color = 'red'
// list.style.fontSize = '20px'

// ******Стилізація за допомогою властивості classList****** \\

// console.dir(list)

// Метод add
// list.classList.add('list')
// Метод remove

// list.classList.remove('list')
// list.classList.remove('secondList')
// Метод toggle
// list.classList.toggle('list')
// list.classList.toggle('list')

// ******Системні атрибути****** \\
// const btn = document.querySelector('.js-btn');
// btn.hidden = true;
// btn.hidden = false;
// btn.disabled = true;

// методи для роботи з атрибутами

// console.log(btn.hasAttribute('hidden'))
// console.log(btn.getAttribute('disabled'))
// btn.setAttribute('disabled', true);
// btn.removeAttribute('disabled')

// ******Data атрибути****** \\

// const btn = document.querySelector('.js-btn');

// console.dir(btn)

// console.log(btn.getAttribute('data-btn-custom-super-id'))
// console.log(btn.dataset.btnCustomSuperId)

// ***************************Практика************************* \\
// Потрібно створити розмітку з картками автомобілів.
// Для створення розмітки використовуй масив cars.

// Варіант-1
// Створи розмітку використовуючи метод createElement

// Варіант-2
// Створи розмітку використовуючи приклад шаблонної розмітки

const cars = [
  {
    id: 1,
    model: "Honda",
    type: "Civic",
    price: 12000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
  },
  {
    id: 2,
    model: "Audi",
    type: "Q7",
    price: 40000,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
  },
  {
    id: 3,
    model: "BMW",
    type: "5 series",
    price: 9000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
  },
  {
    id: 4,
    model: "Honda",
    type: "Accord",
    price: 20000,
    img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
  },
  {
    id: 5,
    model: "Volvo",
    type: "XC60",
    price: 7000,
    img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
  },
];

// *******Варіант-1******* \\

// const list = document.querySelector(".js-list");
// function createMarkup(arr) {
//   return arr.map(({ id, model, type, price, img }) => {
//     const liEL = document.createElement("li");
//     const imgEl = document.createElement("img");
//     const h2EL = document.createElement("h2");
//     const h3El = document.createElement("h3");
//     const pEl = document.createElement("p");

//     liEL.setAttribute("data-car-id", id);

//     imgEl.src = img;
//     imgEl.alt = model;
//     imgEl.style.width = "300px";

//     h2EL.textContent = model;
//     h3El.textContent = type;
//     pEl.textContent = price;

//     liEL.append(imgEl, h2EL, h3El, pEl);
//     return liEL;
//   });
// }
// list.append(...createMarkup(cars))

// *******Варіант-2******* \\
const list = document.querySelector(".js-list");

function createMarkup(arr) {
  return arr.map(
    ({ id, model, type, price, img }) => `
    <li data-car-id="${id}">
        <img src="${img}" alt="${model}" width="300">
        <h2>${model}</h2>
        <h3>${type}</h3>
        <p>${price}</p>
    </li>
`).join('')
}

list.insertAdjacentHTML('afterbegin', createMarkup(cars))
