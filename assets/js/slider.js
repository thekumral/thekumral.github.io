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
  setInterval(showSlides, 3000); // Change slide every 3 seconds
}

// Attach event listeners once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initSlider);
