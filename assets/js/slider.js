let slideIndex = 0;

function showSlides() {
  let slides = document.querySelectorAll('.slider img');
  if (slides.length > 0) {
    slides.forEach((slide) => (slide.style.display = 'none')); // Hide all slides

    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = 'block'; // Show current slide
  }
}

// Initialize the slider
function initSlider() {
  showSlides(); // Show the first slide
  setInterval(showSlides, 5000); // Change slide every 5 seconds

  document
    .querySelector('.prev')
    .addEventListener('click', () => plusSlides(-1));
  document
    .querySelector('.next')
    .addEventListener('click', () => plusSlides(1));
}

function plusSlides(n) {
  slideIndex += n;
  let slides = document.querySelectorAll('.slider img');
  if (slides.length > 0) {
    if (slideIndex > slides.length) slideIndex = 1;
    if (slideIndex < 1) slideIndex = slides.length;
    slides.forEach((slide) => (slide.style.display = 'none'));
    slides[slideIndex - 1].style.display = 'block';
  }
}

// Attach event listeners once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initSlider);
