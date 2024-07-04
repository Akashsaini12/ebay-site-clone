var userData = [];
document.querySelector("form").addEventListener("submit", function () {
  event.preventDefault();

  var userObj = {
    name: document.querySelector("#name").value,
    lastname: document.querySelector("#lname").value,
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value,
  };

  // console.log(userObj)
  userData.push(userObj);
  localStorage.setItem("userData", JSON.stringify(userData));
  alert("User has registered successfully");
  document.querySelector("form").reset();
  window.location.href = "signIn.html";
  console.log(userData);
});
