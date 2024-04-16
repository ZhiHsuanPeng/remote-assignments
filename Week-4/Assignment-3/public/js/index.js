const SignupBtn = document.querySelector(".signup-form .btn");

SignupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  console.log(email, password);
});
