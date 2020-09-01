const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const slides = document.querySelectorAll(".slide");
const auto = true;
let slideInterval;
const intervalTime = 5000;

//Go to next slide by passing current class to next sibling

function nextSlide() {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add("current");
  }
}
//Go to previous slide by passing current class to previous sibling
function prevSlide() {
  const current = document.querySelector(".current");
  current.classList.remove("current");

  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    slides[slides.length - 1].classList.add("current");
  }
}

// Adding click events to next and previous arrow
next.addEventListener("click", (e) => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});
prev.addEventListener("click", (e) => {
  prevSlide();
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, intervalTime);
});

// For auto sliding behavior
if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}
