// get all elements here
const username = document.getElementById("username");
const email = document.getElementById("email");
const number = document.getElementById("number");
const password = document.getElementById("password");
const course = document.getElementById("course");
const getForm = document.getElementById("signupForm");

// get values of feilds from here
getForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const usernameValue = username.value;
  const emailValue = email.value;
  const numberValue = number.value;
  const passwordValue = password.value;
  const courseValue = course.value;

  // for username
  if (usernameValue === "") {
    showErr(username, "Please enter username.");
  } else {
    showSuccess(username);
  }
  // for email
  if (emailValue === "") {
    showErr(email, "Please enter your email.");
  } else {
    if (!validateEmail(emailValue)) {
      showErr(email, "Please enter valid email.");
    } else {
      showSuccess(email);
    }
  }
  // for number
  if (numberValue === "") {
    showErr(number, "Please enter mobile number.");
  } else {
    if (numberValue.length < 10) {
      showErr(number, "Number length must be more than 10 chars.");
    } else if (numberValue.length > 14) {
      // 13 chars length because user can also add like +91-1234567890
      showErr(number, "Number length can't be more than 14 chars.");
    } else {
      showSuccess(number);
    }
  }
  // for password
  if (passwordValue === "") {
    showErr(password, "Please enter password.");
  } else {
    if (passwordValue.length < 6) {
      showErr(password, "Please must be 6 chars long.");
    } else {
      showSuccess(password);
    }
  }
  //for course
  // for username
  if (courseValue === "") {
    showErr(course, "Please select course.");
  } else {
    if (courseValue === "Please select course.") {
      showErr(course, "Please select course.");
    } else showSuccess(course);
  }

  // all inputs validated
  const erroDom = document.getElementsByClassName("errorElem").length;
  if (erroDom === 0) {
    // reset values of input values
    getForm.reset();
    document.querySelectorAll(".successElem").forEach((e) => {
      e.className = "form-group";
    });
    alert("Form is validated and submitted successfully.");
  }
});

function showErr(element, message) {
  const parentElement = element.parentElement;
  parentElement.getElementsByClassName("error")[0].innerText = message;
  parentElement.classList = "form-group errorElem";
}

function showSuccess(element) {
  const parentElement = element.parentElement;
  parentElement.getElementsByClassName("error")[0].innerText = "";
  parentElement.classList = "form-group successElem";
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
