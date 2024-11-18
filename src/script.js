const dateEle = document.querySelector('#date');
const displayEle = document.querySelector('.display');
const hiddenEle = document.querySelector('.hidden-ele');
const basketBtn = document.querySelector('#basket-icon-btn');

let id1 = 0;
let id2 = 0;
let id3 = 0;

dateEle.innerHTML = new Date().getFullYear();

// async function loadData() {
//   try {
//     const res = await fetch('./data/items.json');
//     const data = await res.json();
//     console.log(data);

//     displayEle.innerHTML = data
//       .map((i) => {
//         return `<div class="product-card">
//           <h3>${i.productName}</h3>
//           <p>£${i.price}</p>
//           <img src="./data/${i.img}" alt="">
//         </div>`;
//       })
//       .join('');
//   } catch (err) {
//     console.error(`Error loading JSON Data: ${err}`);
//   }
// }
// loadData();
let cartArray = [];
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
    } else if (cartArray[i].productId === idArray[1]) {
      id2 += 1;
    } else if (cartArray[i].productId === idArray[2]) {
      id3 += 1;
    } else {
      console.log(`${cartArray[i]} unknown product`);
    }
  }
  console.log(id1);
  console.log(id2);
  console.log(id3);
}
