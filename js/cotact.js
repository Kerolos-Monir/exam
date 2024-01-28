function openNav() {
    mySidebar.style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    mySidebar.style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    openBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }







openBtn.onclick = function() {
    if (mySidebar.style.width === "250px") {
      closeNav();
    } else {
      openNav();
      openBtn.innerHTML = `<i class="fa-solid fa-xmark ps-2 bg-white"></i>`;
    }
  };









let form = document.querySelector("#sub");
let name = document.querySelector("#name");
let phone = document.querySelector("#phone");
let password = document.querySelector("#password");
let repassword = document.querySelector("#repassword");
let email = document.querySelector("#email");
let age = document.querySelector("#age");

let nameRegex = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
let phoneRegex = /^\d{10}$/;
let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let ageRegex = /^\d{1,2}$/;

function validateInput(input, regex) {
  if (regex.test(input.value)) {
    input.setCustomValidity("");
  } else {
    input.setCustomValidity("Invalid input");
  }
}

name.addEventListener("input", () => validateInput(name, nameRegex));
phone.addEventListener("input", () => validateInput(phone, phoneRegex));
password.addEventListener("input", () => validateInput(password, passwordRegex));
repassword.addEventListener("input", () => {
  validateInput(repassword, passwordRegex);
  if (repassword.value !== password.value) {
    repassword.setCustomValidity("Passwords do not match");
  } else {
    repassword.setCustomValidity("");
  }
});
email.addEventListener("input", () => validateInput(email, emailRegex));
age.addEventListener("input", () => validateInput(age, ageRegex));

form.addEventListener("submit", (event) => {
  if (!form.checkValidity()) {
    event.preventDefault();
  }
});