function avg(data) {
  let total = data.products.reduce((acc, product) => acc + product.price, 0);
  return total / data.size;
}
console.log(
  avg({
    size: 3,
    products: [
      {
        name: "Product 1",
        price: 100,
      },
      {
        name: "Product 2",
        price: 700,
      },
      {
        name: "Product 3",
        price: 250,
      },
    ],
  })
);
