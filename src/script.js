const dateEle = document.querySelector('#date');
const displayEle = document.querySelector('.display');

dateEle.innerHTML = new Date().getFullYear();

async function loadData() {
  try {
    const res = await fetch('./data/items.json');
    const data = await res.json();
    console.log(data);

    displayEle.innerHTML = data
      .map((i) => {
        return `<div class="test">
          <h3>${i.productName}</h3>
          <img src="./data/${i.img}" alt="">
          <p>£${i.price}</p>
        </div>`;
      })
      .join('');
  } catch (err) {
    console.error(`Error loading JSON Data: ${err}`);
  }
}
loadData();
