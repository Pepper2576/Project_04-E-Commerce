const dateEle = document.querySelector('#date');
const displayEle = document.querySelector('.display');

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

function addToCart(name, cost, imgUrl) {
  console.log(`${name}\n${cost}\n${imgUrl}`);
}
