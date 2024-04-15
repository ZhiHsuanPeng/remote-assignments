export async function ajax(src, callback) {
  try {
    const response = await fetch(src);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    callback(data);
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
