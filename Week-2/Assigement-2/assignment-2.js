function avg(data) {
  let total = 0;
  data.products.forEach((product) => (total += product.price));
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
