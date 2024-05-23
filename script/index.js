var filteredUser = userData.filter(function (ele) {
  return ele.email === user.email;
});

console.log(filteredUser);
document.querySelector("#loggedInUser").innerText = filteredUser[0].name;
if (!user) {
  window.location.href = "login.html";
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
