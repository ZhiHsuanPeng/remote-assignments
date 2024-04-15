import axios from "axios";

export async function ajax(src, callback) {
  try {
    const response = await axios({
      method: "GET",
      url: src,
    });
    callback(response.data);
  } catch (err) {
    console.log(err);
  }
}

export function render(data) {
  document.querySelector("body").innerHTML = "";
  const jsonDiv = document.createElement("div");
  jsonDiv.innerText = JSON.stringify(data);
  document.body.appendChild(jsonDiv);
}
