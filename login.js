const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function setError(id, error) {}

function clearError() {}

function validate() {
  let setReturn = true;
  let name = document.forms["Signup"]["name"].value;
  if (name.length < 5) {
    let error = document.querySelector(".user-errorHandle");
    error.style.display = "initial";
    setReturn = false;
    document.forms["Signup"]["name"].value = "";
    let border = document.getElementById("nameErrorBorder");
    border.style.border = "0.5px solid red";
  }
  let pass = document.forms["Signup"]["password"].value;
  if (pass.length < 8) {
    let error = document.querySelector(".password-errorHandle");
    error.style.display = "initial";
    setReturn = false;
    document.forms["Signup"]["password"].value = "";
    let border = document.getElementById("passErrorBorder");
    border.style.border = "0.5px solid red";
  }
  let confirmpass = document.forms["Signup"]["confirmPass"].value;
  if (confirmpass != pass) {
    let error = document.querySelector(".confirm-errorHandle");
    error.style.display = "initial";
    document.forms["Signup"]["confirmpass"].value = "";
    // let border = document.getElementById("confirmPassErrorBorder");
    // border.style.border = "0.5px solid red";
    setReturn = false;
  }
  return setReturn;
}
