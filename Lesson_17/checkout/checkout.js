const LS_KEY = "checkout";
const list = document.querySelector(".js-list");
const clearBtn = document.querySelector(".js-clear");
const totalPriceLabel = document.querySelector(".js-total-price");
const products = JSON.parse(localStorage.getItem(LS_KEY)) ?? [];
let totalPrice = 0;

if (products.length) {
  clearBtn.hidden = false;
  totalPrice = products.reduce((acc, { qty, price }) => acc + qty * price, 0);
}

totalPriceLabel.textContent = totalPrice
  ? `Total price ${totalPrice} грн`
  : "Your basket is empty";
list.insertAdjacentHTML("afterbegin", createMarkup(products));
clearBtn.addEventListener("click", handlerClearBasket);

function handlerClearBasket() {
  localStorage.removeItem(LS_KEY);
  location.href = "../index.html";
}

function createMarkup(arr) {
  return arr
    .map(
      ({ img, price, qty, name }) => `
       <li class="cart-item">
        <img src="${img}" alt="${name}" class="product-img" />
        <h2>${name}</h2>
        <p>Quantity: ${qty}</p>
        <p>Total price: ${qty * price}грн</p>
      </li>`
    )
    .join("");
}
