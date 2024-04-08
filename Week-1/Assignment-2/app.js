const message = document.querySelector(".banner");
const button = document.querySelector(".cta");
const hiddenContent = document.querySelector(".hidden");

message.addEventListener("click", () => {
  message.textContent = "Have a Good Time!";
});

button.addEventListener("click", () => {
  hiddenContent.removeAttribute("style");
  console.log("check");
});
