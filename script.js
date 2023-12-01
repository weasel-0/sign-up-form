"use strict";

let passwordInput = document.getElementById("password");
let passwordRequirements = document.querySelectorAll(".passwordMessage");
let confirmPassword = document.getElementById("confirmPass");
let checkPassword = [
  { regex: /[a-z]/ }, // letters from a - z (lowercase)
  { regex: /[A-Z]/ }, // letters from A-Z (uppercase),
  { regex: /[0-9]/ }, // numbers from 0 - 9
  { regex: /.{8,}/ }, // min 8 letters,
  //   { regex: /[^A-Za-z0-9]/ }, // special characters
];

// let requirementsArr = Array.from(passwordRequirements);

passwordInput.addEventListener("keyup", function () {
  checkPassword.forEach((condition, i) => {
    let isValid = condition.regex.test(passwordInput.value);
    if (isValid) {
      passwordRequirements[i].classList.remove("invalid");
      passwordRequirements[i].classList.add("valid");
    } else {
      passwordRequirements[i].classList.remove("valid");
      passwordRequirements[i].classList.add("invalid");
    }
  });
});

confirmPassword.addEventListener("keyup", function () {
  if (passwordInput.value != confirmPassword.value) {
    confirmPassword.classList.add("wrong");
  } else {
    confirmPassword.classList.add("correct");
  }
});
