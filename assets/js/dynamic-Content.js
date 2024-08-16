document.addEventListener('DOMContentLoaded', () => {
  const projectCards = document.querySelectorAll('.project-card');
  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalLink = document.getElementById('modalLink');
  const slider = modal.querySelector('.slider');
  const closeModal = document.querySelector('.modal .close');
  const modalBody = modal.querySelector('.modal-body');
  const modalText = modal.querySelector('.modal-text');
  const modalImage = modal.querySelector('.modal-image');

  projectCards.forEach((card) => {
    card.addEventListener('click', () => {
      const projectTitle = card.querySelector('h3').innerText;
      const projectDescription = card.querySelector('p').innerText;
      const projectLink = card.querySelector('.github-link').href;
      const images = card.querySelectorAll('.image-gallery img');

      modalTitle.innerText = projectTitle;
      modalDescription.innerText = projectDescription;
      modalLink.href = projectLink;

      slider.innerHTML = '';

      images.forEach((img, index) => {
        const imgClone = img.cloneNode();
        if (index === 0) {
          imgClone.classList.add('active');
        }
        slider.appendChild(imgClone);
      });

      adjustImageOrientation();
      modal.style.display = 'flex';
    });
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  function adjustImageOrientation() {
    const img = slider.querySelector('img.active');
    const aspectRatio = img.naturalWidth / img.naturalHeight;

    // Reset styles
    modalBody.style.flexDirection = 'row';
    modalImage.style.width = '50%';
    modalText.style.width = '50%';
    modalImage.style.height = 'auto'; // Reset height

    if (window.innerWidth <= 768) {
      // Mobile view adjustments
      modalBody.style.flexDirection = 'column';
      modalImage.style.width = '100%';
      modalText.style.width = '100%';
      modalText.style.fontSize = '0.9rem'; // Adjust text size for mobile

      if (aspectRatio > 1) {
        // Horizontal image
        modalImage.style.width = '100%';
        modalImage.style.height = 'auto';
      } else {
        // Vertical image
        modalImage.style.width = '60%';
        modalImage.style.height = 'auto';
        modalImage.padding = '0';
      }
    } else {
      // Desktop view adjustments
      if (aspectRatio > 1) {
        // Horizontal image
        modalImage.style.width = '70%';
        modalImage.style.height = 'auto';
        modalBody.style.flexDirection = 'column';
        modalText.style.width = '100%';
        modalText.style.fontSize = '0.9rem';
      } else {
        // Vertical image
        modalImage.style.width = '30%';
        modalImage.style.height = 'auto';
      }
    }
  }
});
