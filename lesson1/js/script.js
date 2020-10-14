const products = [
  { id: 1, title: "Жолудь", img: "../img/s1.jpg", price: 1500 },
  { id: 2, title: "Слоник", img: "../img/s2.jpg", price: 2000 },
  { id: 3, title: "Попугай", img: "../img/s3.jpg", price: 1200 },
  { id: 4, title: "Листик", img: "../img/s4.jpg", price: 1000 },
  { id: 5, title: "Бабочка", img: "../img/s5.jpg", price: 1400 },
  { id: 6, title: "Фламинго", img: "../img/s6.jpg", price: 1300 },
];

const renderProduct = (title, price, img = "../img/none.png") => {
  return `<div class="product-item">
						<a href="#"><img src="${img}" alt=""></a>
            <h3>${title}</h3>
            <p>${price}</p>
            <button class="by-btn">Добавить в корзину</button>
          </div>`;
};

const renderProducts = (list) => {
  //Сократил
  document.querySelector(".products").innerHTML = list
    .map((item) => renderProduct(item.title, item.price, item.img))
    .join("");
};
renderProducts(products);
