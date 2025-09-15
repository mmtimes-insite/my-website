let currentSlide = 0;

function showSlides() {
  const slides = document.querySelectorAll(".slides img");
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  });
}

function nextSlide() {
  const slides = document.querySelectorAll(".slides img");
  currentSlide = (currentSlide + 1) % slides.length;
  showSlides();
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slides img");
  slides.forEach((slide, index) => {
    slide.style.position = "absolute";
    slide.style.top = "0";
    slide.style.left = "0";
    slide.style.width = "100%";
    slide.style.transition = "transform 1s ease-in-out"; // smooth slide
  });

  showSlides();
  setInterval(nextSlide, 4000); // change every 4 seconds
});
