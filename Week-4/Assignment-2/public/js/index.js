import { ajax, render } from "./getPro.js";
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  ajax(
    "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products",
    render
  );
});
