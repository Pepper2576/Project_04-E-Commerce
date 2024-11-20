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
  //console.log(`${id}\n${name}\n${cost}\n${imgUrl}`);
  const idArray = [1, 2, 3];
  let productObject = {
    productId: id,
    productName: name,
    productCost: cost,
    productImg: imgUrl,
    qty: 1,
  };
  cartArray.push(productObject);

  if (productObject.productId === 1) {
    id1 += 1;
    if (id1 === 1 && !jsxArray.includes(productObject.productId)) {
      jsxArray.push(productObject);
    }
  } else if (productObject.productId === 2) {
    id2 += 1;
    if (id2 === 1 && !jsxArray.includes(productObject.productId)) {
      jsxArray.push(productObject);
    }
  } else if (productObject.productId === 3) {
    id3 += 1;
    if (id3 === 1 && !jsxArray.includes(productObject.productId)) {
      jsxArray.push(productObject);
    }
  }
  console.log(cartArray, id1, id2, id3);
  console.log(jsxArray);
}

basketBtn.addEventListener('click', () => {
  if (hiddenEle.style.display != 'flex') {
    getProducts();
    hiddenEle.style.display = 'flex';
  } else {
    hiddenEle.style.display = 'none';
  }
});

function addQty() {
  for (let i = 0; i < jsxArray.length; i++) {
    if (jsxArray[i].productId === 1) {
      jsxArray[i].qty = id1;
    } else if (jsxArray[i].productId === 2) {
      jsxArray[i].qty = id2;
    } else if (jsxArray[i].productId === 3) {
      jsxArray[i].qty = id3;
    }
  }
}

// add a function that adds and removes qty and if qty = 0 delete (slice(indexNum, howManyElements)) to it
function getProducts() {
  addQty();
  if (jsxArray.length === 0) {
    document.querySelector('.basket').innerHTML = `<h1>Basket Empty</h1><hr>`;
  } else {
    document.querySelector('.basket').innerHTML = jsxArray
      .map((item) => {
        return `
              <div class="cart-container">
              <h4 class="cart-item">${item.productName}</h4>
              <img src="${item.productImg}" alt="Item-img" class="cart-item">
              <div class="btn-container">
                <button class="plus">-</button>
                <p class="cart-item item-qty">${item.qty}</p>
                <button class="minus">+</button>
              </div>
                <p class="cart-item">Total cost:£${
                  item.productCost * item.qty
                }</p>
              </div>
              <hr>
              `;
      })
      .join('');
  }
}
