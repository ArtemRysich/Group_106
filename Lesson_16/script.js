// ******************************Lazy Loading****************************** \\

// Тестовий масив для lazy-loading
// const cats = [
//   "https://i.ytimg.com/vi/iKA6ZXpGcGQ/maxresdefault.jpg",
//   "https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg",
//   "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg",
//   "https://i.guim.co.uk/img/media/941093798b256e5d1aa6246a08824bc86f62a31f/0_0_5000_3000/master/5000.jpg?width=1300&quality=85&fit=max&s=ea672fb16df8634901283252059baaf8",
//   "https://nypost.com/wp-content/uploads/sites/2/2022/06/reddit-cats-judging-looks-00.jpg?quality=75&strip=all",
//   "https://gdb.voanews.com/09690000-0a00-0242-5408-08da76ebde16_cx0_cy3_cw99_w1200_r1.jpg",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCK8yYjQ6igjrAJyCyXUwV6U7RDkLVc4FVnQ&usqp=CAU",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU",
//   "https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU",
//   "https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU",
//   "https://assets.globalwildlife.org/m/3b6039a74fd067ea/webimage-Tigrinia.jpg",
//   "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg",
//   "https://www.nhm.ac.uk/content/dam/nhmwww/discover/wild-cats/margay-two-column.jpg.thumb.768.768.jpg",
//   "https://irs.www.warnerbros.com/gallery-v2-jpeg/cats__dogs_photo_12-14571309.jpg",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyGk9Ds3bdd4B404EcoMDrVUKnU5u9KABOg&usqp=CAU",
// ];

// const list = document.querySelector(".js-cats");
// const markup = cats
//   .map(
//     (src) => `
//    <li>
//     <img src="${src}" alt="cat" width="300" loading="lazy" />
//     <p>   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus minus ullam totam sint ipsa reiciendis, accusamus voluptate neque, quia deleniti maxime, illum soluta error. Quam tenetur minima deleniti possimus explicabo.
//    Soluta non consequatur animi obcaecati deleniti assumenda! Culpa assumenda perspiciatis obcaecati reprehenderit odio explicabo deleniti praesentium, sapiente veritatis saepe quisquam temporibus quae distinctio doloremque ad autem maiores quia laboriosam magnam.
//    Rem, libero impedit quia sed ad id veniam explicabo iusto aut expedita eveniet asperiores illo porro officia non quidem quos modi tempora. Sunt, repudiandae dolorum dolores nulla fugiat sit temporibus.
//    Eligendi iste assumenda quod, obcaecati sint dolorem reprehenderit id a saepe adipisci eveniet rerum mollitia provident odio minima esse exercitationem quis repellat consectetur repudiandae sapiente voluptas necessitatibus. Exercitationem, dolor corporis?
//  </p>
//    </li>`
//   )
//   .join("");

//   list.insertAdjacentHTML('afterbegin', markup)
//   console.log(cats.length)

// *****************************Throttle & Debounce***************************** \\
// https://bundlephobia.com/

const inputRef = document.querySelector(".js-search");

// inputRef.addEventListener('input', _.throttle(handlerSearch, 1000, {
//     leading: true,
//     trailing: false,
// }))
// function handlerSearch(evt){
//     console.log(evt.target.value)
// }

// console.log(_)

// inputRef.addEventListener(
//   "input",
//   _.debounce(handlerSearch, 1000, {
//     leading: true,
//     trailing: true,
//     maxWait: 400,
//   })
// );

// function handlerSearch(evt) {
//   console.log(evt.target.value);
// }

// ************************************Практика************************************ \\

// Потрібно створити гру хрестики нулики.
// Відмалюй розмітку ігрового поля для контейнера з класом "content", для кожної клітинки застосуй клас "item"
// Реалізуй делегування подій на ігровому полі для можливості ходу.
// Скріпт має самостійно визначати переможця гри та виводити модальне вікно з переможцем (X/O)
// Для історії ходів наших гравців (Х/О) потрібно щоб кожна клітинка ігрового поля містила дата атрибут id
// Створи скріпт для перевірки виграшної комбінації, список всіх можливих виграшних комбінацій знаходиться в масиві combination.
// Для виводу модального вікна застосуй бібліотеку basiclightbox
// Після визначення переможця обов'язково підготуй ігрове поле для наступної гри

const contentRef = document.querySelector(".js-content");
const historyX = [];
const historyO = [];
const combination = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [1, 5, 9],
  [3, 5, 7],
  [3, 6, 9],
];

let player = "X";

contentRef.addEventListener("click", handlerStep);
contentRef.insertAdjacentHTML("afterbegin", createMarkup());
function handlerStep(evt) {
  if (evt.target.textContent !== "") {
    return;
  }

  const id = Number(evt.target.dataset.id);
  const minStepCount = 3;
  let isWinner = false;

  evt.target.textContent = player;

  if (player === "X") {
    historyX.push(id);
    isWinner = historyX.length >= minStepCount ? checkWinner(historyX) : false;
  } else {
    historyO.push(id);
    isWinner = historyO.length >= minStepCount ? checkWinner(historyO) : false;
  }

  if (isWinner) {
    const instance = basicLightbox.create(`
        <div class="box">
            <h2>Player - ${player} is winner</h2>
        </div>
    `);
    instance.show();
    resetGame();
    return;
  }

  const isDraw = [...contentRef.children].every(
    (item) => item.textContent !== ""
  );

//   const isDrawSecond = historyX.length + historyO.length === 9

  if (isDraw) {
    const instance = basicLightbox.create(`
        <div class="box">
            <h2>😰 Is Drow</h2>
        </div>
    `);
    instance.show();
    resetGame();
    return;
  }
  player = player === "X" ? "O" : "X";
}

function checkWinner(arr) {
  return combination.some((item) => item.every((id) => arr.includes(id)));
}

function resetGame() {
  contentRef.innerHTML = createMarkup();
  player = "X";
  historyO.splice(0);
  historyX.splice(0);
}
function createMarkup() {
  let markup = "";
  for (let i = 1; i <= 9; i += 1) {
    markup += `<li class="item" data-id="${i}"></li>`;
  }

  return markup;
}
