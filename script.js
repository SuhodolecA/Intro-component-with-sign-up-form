const form = document.querySelector("form"),
      inputFn = document.querySelector(".signup-form__fn-input"),
      inputLn = document.querySelector(".signup-form__ln-input"),
      inputEmail = document.querySelector(".signup-form__email-input"),
      inputPs = document.querySelector(".signup-form__password-input");

form.addEventListener("submit", checkForm);

function checkForm(e) {
  e.preventDefault();
  const inputFnVal = inputFn.value.trim(),
        inputLnVal = inputLn.value.trim(),
        inputEmailVal = inputEmail.value.trim(),
        inputPsVal = inputPs.value.trim();

  if (inputFnVal === "") {
    inputFn.parentNode.classList.add("error");
  } 

  if (inputLnVal === "") {
    inputLn.parentNode.classList.add("error");
  } 

  if (!checkEmail(inputEmailVal)) {
    inputEmail.parentNode.classList.add("error");
  } 

  if (inputPsVal === "") {
    inputPs.parentNode.classList.add("error");
  } 
}

function checkEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
