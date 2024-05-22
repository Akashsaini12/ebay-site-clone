var userData = JSON.parse(localStorage.getItem("userData")) || [];
var currentUser = [];
document.querySelector("form").addEventListener("submit", function () {
  event.preventDefault();

  var user = {
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value,
  };

  //  currentUser.push(user)
  userData.filter(function (ele) {
    if (ele.email === user.email && ele.password === user.password) {
      user.status = true;
      currentUser.push(user);
      localStorage.setItem("currentUser", JSON.stringify(user.status));
      alert("Login Successful");
      window.location.href = "index.html";
    }
  });
});
