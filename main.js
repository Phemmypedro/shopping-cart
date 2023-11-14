let shop = document.getElementById("shop");
/**
 * photo and price section
 */
let shopItemsData = [
  {
    id: "hjejdhdfndg",
    name: "pedro Shirt ",
    price: 45,
    desc: " lorem ipsum dolor sit amet",
    img: "images/image1.jpg",
  },
  {
    id: "jkjjxdhhdfndg",
    name: "realMen Shirt ",
    price: 550,
    desc: " lorem ipsum dolor sit amet",
    img: "images/image2.jpg",
  },
  {
    id: "hjejfdgvg",
    name: "bodosky Shirt ",
    price: 345,
    desc: " lorem ipsum dolor sit amet",
    img: "images/image3.webp",
  },
  {
    id: "hjejddg",
    name: "pedro Sneaker ",
    price: 445,
    desc: " lorem ipsum dolor sit amet",
    img: "images/image4.jpg",
  },
];
let basket = [
  {
    id: "hdjdhdnd",
    item: 1,
  },
];
/**
 * shopitem section
 */
let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x;
      return `
    <div id=product-id-${id} class="item">

        <img width="220" src=${img} alt="" />
        <div class="details"></div>
        <h3> ${name}</h3>
        <p> ${desc}</p>
        <div class="price-quantity">
          <h2>$ ${price}</h2>
          <div class="button"></div>
          <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
          <div id=${id} class="quantity">0</div>
          <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
        </div>
      
    </div>
    
    `;
    })
    .join(""));
};
/**
 * stying section
 */
generateShop();

let increment = (id) => {
  let selecteditem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  console.log(basket);
  update(selecteditem.id);
};

let decrement = (id) => {
  let selectedItem = id;

  console.log(selectedItem.id);
};
let update = () => {};
