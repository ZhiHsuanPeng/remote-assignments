const signupBtn = document.querySelector(".signup-form .btn");
const loginBtn = document.querySelector(".login-form .btn");
import { signup } from "./signup";
import { login } from "./login";

if (signupBtn) {
  signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    signup(email, password);
  });
}

if (loginBtn) {
  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    login(email, password);
  });
}
