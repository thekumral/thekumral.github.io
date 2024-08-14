let slideIndex = 0;

function showSlides() {
  let slides = document.querySelectorAll('.slider img');
  slides.forEach((slide, index) => {
    slide.style.display = 'none'; // Hide all slides
  });

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = 'block'; // Show current slide
}

// Next/previous controls
function plusSlides(n) {
  slideIndex += n;
  let slides = document.querySelectorAll('.slider img');
  if (slideIndex > slides.length) slideIndex = 1;
  if (slideIndex < 1) slideIndex = slides.length;
  slides.forEach((slide) => (slide.style.display = 'none'));
  slides[slideIndex - 1].style.display = 'block';
}

// Attach event listeners
document.querySelector('.prev').addEventListener('click', function () {
  plusSlides(-1);
});

document.querySelector('.next').addEventListener('click', function () {
  plusSlides(1);
});
