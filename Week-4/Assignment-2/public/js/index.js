const axios = require("axios");

async function ajax(src, callback) {
  const res = await axios({
    method: "GET",
    url: src,
  });
  callback(res.data);
}
function render(data) {
  // document.createElement() and appendChild() methods are
  //preferred.
  const list = document.createElement("ul");
  const createItemHtml = (product) => {
    const item = document.createElement("li");
    item.innerText = `name: ${product.name}, price: ${product.price}, description: ${product.description}`;
    console.log(item);
    return item;
  };
  data.forEach(product, createItemHtml(product));
}
// ajax(
//   "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products",
//   function (response) {
//     render(response);
//   }
// );
// you should get product information in JSON format and render
// data in the page
ajax(
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products",
  console.log
);
product = {
  name: "Pixel Book",
  price: 12000,
  description: "最新的 Chromebook 產品。",
};

const createItemHtml = (product) => {
  const item = document.createElement("li");
  item.innerText = `name: ${product.name}, price: ${product.price}, description: ${product.description}`;
  console.log(item);
  return item;
};

createItemHtml(product);
