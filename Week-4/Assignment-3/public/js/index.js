const SignupBtn = document.querySelector(".signup-form .btn");
import { signup } from "./signup";

if (SignupBtn) {
  SignupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    signup(email, password);
  });
}
