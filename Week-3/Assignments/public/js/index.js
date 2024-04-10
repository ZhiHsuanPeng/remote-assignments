const form = document.querySelector("form");

const sendPostRequest = async (number) => {
  try {
    const response = await fetch(`http://localhost:3000/data?number=${number}`);
    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err.message);
  }
};

form.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();
    const input = document.querySelector("input").value;
    const result = await sendPostRequest(input);
    document
      .querySelector("body")
      .insertAdjacentHTML(
        "beforeend",
        `<h2>The result is ${result.data}!</h2>`
      );
    setTimeout(() => document.querySelector("h2").remove(), 2000);
  } catch (err) {
    console.log(err);
  }
});
