const form = document.getElementById("form");
const fname = document.getElementById("first-name");
const lname = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  var firstName = fname.value.trim();
  var lastName = lname.value.trim();
  var emailValue = email.value.trim();
  var passwordValue = password.value.trim();
  var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (firstName === "") {
    errorFunc(fname, "First Name cannot be empty");
  }

  if (lastName === "") {
    errorFunc(lname, "Last Name cannot be empty");
  }

  if (emailValue === "") {
    errorFunc(email, "Email cannot be empty");
  } else if (!emailValue.match(pattern)) {
    errorFunc(email, "Looks like this is not an email");
  }

  if (passwordValue === "") {
    errorFunc(password, "Password cannot be empty");
  }
});

function errorFunc(req, message) {
  const formControl = req.parentElement;
  const span = formControl.querySelector("span");
  span.innerText = message;
  req.className += "error";
  span.className += "error-text";
  if (req !== email) {
    req.value = "";
  } else {
    req.style.color = "hsl(0,100%,74%)";
  }
}
