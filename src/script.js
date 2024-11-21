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
  let productObject = {
    productId: id,
    productName: name,
    productCost: cost,
    productImg: imgUrl,
    qty: 1,
  };
  cartArray.push(productObject);
  console.log(cartArray);

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

function getProducts() {
  addQty();
  getTotal();

  if (jsxArray.length === 0) {
    document.querySelector('.basket').innerHTML = `<h1>Basket Empty</h1><hr>`;
  } else {
    document.querySelector('.basket').innerHTML = jsxArray
      .map((item) => {
        let total = item.productCost * item.qty;
        let displayTotal = total.toFixed(2);
        return `
              <div class="cart-container">
              <h4 class="cart-item">${item.productName}</h4>
              <img src="${item.productImg}" alt="Item-img" class="cart-item">
              <div class="btn-container" key="${item.productId}">
                <button class="minus">-</button>
                <p class="cart-item item-qty">${item.qty}</p>
                <button class="plus">+</button>
              </div >
                <p class="cart-item">Total cost:£${displayTotal}</p>
              </div>
              <hr>
              `;
      })
      .join('');
  }

  document.querySelectorAll('.plus').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      let parent = event.target.parentElement.getAttribute('key');

      if (parent == 1) {
        id1 += 1;
        addQty();
        getProducts();
      } else if (parent == 2) {
        id2 += 1;
        addQty();
        getProducts();
      } else if (parent == 3) {
        id3 += 1;
        addQty();
        getProducts();
      }
    });
  });

  document.querySelectorAll('.minus').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      let parent = event.target.parentElement.getAttribute('key');

      if (parent == 1) {
        id1 -= 1;
        if (id1 === 0) {
          jsxArray = jsxArray.filter((item) => item.productId !== 1);
        }
        addQty();
        getProducts();
      } else if (parent == 2) {
        id2 -= 1;
        if (id2 === 0) {
          jsxArray = jsxArray.filter((item) => item.productId !== 2);
        }
        addQty();
        getProducts();
      } else if (parent == 3) {
        id3 -= 1;
        if (id3 === 0) {
          jsxArray = jsxArray.filter((item) => item.productId !== 3);
        }
        addQty();
        getProducts();
      }
    });
  });
}

function getTotal() {
  let num1 = 0;
  let num2 = 0;
  let num3 = 0;
  if (jsxArray.length === 0) {
    document.querySelector('#sum-total').innerHTML = 0;
  } else {
    for (let i = 0; i < cartArray.length; i++) {
      if (cartArray[i].productId === 1) {
        num1 = id1 * cartArray[i].productCost;
      } else if (cartArray[i].productId === 2) {
        num2 = id2 * cartArray[i].productCost;
      } else if (cartArray[i].productId === 3) {
        num3 = id3 * cartArray[i].productCost;
      }
    }
    let total = num1 + num2 + num3;
    let totalFormat = total.toFixed(2);
    document.querySelector('#sum-total').innerHTML = totalFormat;
  }
}
