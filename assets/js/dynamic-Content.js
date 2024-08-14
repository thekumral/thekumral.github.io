document.addEventListener('DOMContentLoaded', () => {
  const projectCards = document.querySelectorAll('.project-card');
  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalLink = document.getElementById('modalLink');
  const slider = modal.querySelector('.slider');
  const closeModal = document.querySelector('.modal .close');
  const modalBody = modal.querySelector('.modal-body');
  const modalImage = modal.querySelector('.modal-image');
  const modalText = modal.querySelector('.modal-text');

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

      adjustImageOrientation(images[0]);

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

  function adjustImageOrientation(img) {
    const aspectRatio = img.naturalWidth / img.naturalHeight;

    if (aspectRatio > 1) {
      modalBody.style.flexDirection = 'column';
      modalText.style.order = '0';
      modalImage.style.order = '1';
      modalImage.style.maxWidth = '100%';
    } else {
      modalBody.style.flexDirection = 'row';
      modalText.style.order = '0';
      modalImage.style.order = '1';
      modalImage.style.maxWidth = '40%';
    }
  }
});
