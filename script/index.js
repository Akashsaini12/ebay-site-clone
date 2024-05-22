// var slideImages = document.querySelectorAll("img");
// var next = document.querySelector(".next");
// var prev = document.querySelector(".prev");

// var counter = 0;

// next.addEventListener('click', slideNext);
// function slideNext() {
//   slideImages[counter].style.animation = 'next1 0.5s ease-in forwords';
//   if (counter >= slideImages.length - 1) {
//     counter = 0;
//   } else {
//     counter++;
//   }

// }
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}