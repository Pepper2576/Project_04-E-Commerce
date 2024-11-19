const dateEle = document.querySelector('#date');
const displayEle = document.querySelector('.display');
const hiddenEle = document.querySelector('.hidden-ele');
const basketBtn = document.querySelector('#basket-icon-btn');

let id1 = 0;
let id2 = 0;
let id3 = 0;

let cartArray = [];
let jsxArray = [];

dateEle.innerHTML = new Date().getFullYear();

function addToCart(id, name, cost, imgUrl) {
  console.log(`${id}\n${name}\n${cost}\n${imgUrl}`);
  let productObject = {
    productId: id,
    productName: name,
    productCost: cost,
    productImg: imgUrl,
    qty: 1,
  };
  cartArray.push(productObject);
}

basketBtn.addEventListener('click', () => {
  if (hiddenEle.style.display != 'flex') {
    checkCart();
    // getProducts();
    hiddenEle.style.display = 'flex';
  } else {
    hiddenEle.style.display = 'none';
  }
});

function checkCart() {
  const idArray = [1, 2, 3];

  for (let i = 0; i < cartArray.length; i++) {
    if (cartArray[i].productId === idArray[0]) {
      id1 += 1;
      if (id1 === 1) {
        jsxArray.push(cartArray[i]);
      }
    } else if (cartArray[i].productId === idArray[1]) {
      id2 += 1;
      if (id2 === 1) {
        jsxArray.push(cartArray[i]);
      }
    } else if (cartArray[i].productId === idArray[2]) {
      id3 += 1;
      if (id3 === 1) {
        jsxArray.push(cartArray[i]);
      }
    } else {
      alert(`${cartArray[i]} unknown product`);
    }
  }
}

function addQty() {
  for (let i = 0; i < jsxArray.length; i++) {
    if (jsxArray[i].productId === 1) {
      jsxArray[i].qty = id1;
    }
  }
}

function getProducts() {
  addQty();
  document.querySelector('.basket').innerHTML = jsxArray
    .map((item) => {
      return `
              <div class="cart-container">
              <h4 class="cart-item">${item.productName}</h4>
              <img src="${item.productImg}" alt="Item-img" class="cart-item">
              <button class="btn">-</button>
              <p class="cart-item">${item.qty}</p>
              <button class="btn">+</button>
              <p class="cart-item">Total cost</p>
              </div>
              <hr>
              `;
    })
    .join('');
}
