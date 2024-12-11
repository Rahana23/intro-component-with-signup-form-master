const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = form["firstname"].value.trim();
  const lastName = form["lastname"].value.trim();
  const email = form["email"].value.trim();
  const password = form["password"].value.trim();

  if (firstName === "") {
    addErrorTo("firstname", "First Name is required");
  } else {
    removeErrorFrom("firstname");
  }

  if (lastName === "") {
    addErrorTo("lastname", "Last Name is required");
  } else {
    removeErrorFrom("lastname");
  }

  if (email === "") {
    addErrorTo("email", "Email is required");
  } else if (!isValidEmail(email)) {
    addErrorTo("email", "Email is not valid");
  } else {
    removeErrorFrom("email");
  }

  if (password === "") {
    addErrorTo("password", "Password is required");
  } else {
    removeErrorFrom("password");
  }

  // Check if all fields are valid
  if (
    firstName !== "" &&
    lastName !== "" &&
    email !== "" &&
    isValidEmail(email) &&
    password !== ""
  ) {
    alert("Form submitted successfully!");
    form.reset(); // Optional: reset the form
  }
});

// Helper Functions
function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function addErrorTo(field, message) {
  const formControl = form[field].parentNode;
  formControl.classList.add("error");

  const small = formControl.querySelector("small");
  small.innerText = message;
}

function removeErrorFrom(field) {
  const formControl = form[field].parentNode;
  formControl.classList.remove("error");

  const small = formControl.querySelector("small");
  small.innerText = "";
}
