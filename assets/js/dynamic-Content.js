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
      // Tıklanan karttan verileri al
      const projectTitle = card.querySelector('h3').innerText;
      const projectDescription = card.querySelector('p').innerText;
      const projectLink = card.querySelector('.github-link').href;
      const images = card.querySelectorAll('.image-gallery img');

      // Verileri modala yerleştir
      modalTitle.innerText = projectTitle;
      modalDescription.innerText = projectDescription;
      modalLink.href = projectLink;

      // Önceki resimleri temizle
      slider.innerHTML = '';

      // Yeni resimleri slider'a ekle
      images.forEach((img, index) => {
        const imgClone = img.cloneNode();
        if (index === 0) {
          imgClone.classList.add('active');
        }
        slider.appendChild(imgClone);
      });

      // Resim yüksekliğine göre düzeni ayarla
      adjustImageOrientation();

      // Modalı göster
      modal.style.display = 'flex';
    });
  });

  // 'X' işaretine tıklanınca modalı kapat
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Modal içeriği dışına tıklanınca modalı kapat
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  function adjustImageOrientation() {
    const img = slider.querySelector('img.active');
    const aspectRatio = img.naturalWidth / img.naturalHeight;

    // Önceki düzenlemeleri sıfırla
    modalBody.style.flexDirection = 'row';
    modalImage.style.maxWidth = '50%';
    modalText.style.width = '50%';

    if (aspectRatio > 1) {
      // Yatay resim
      modalBody.style.flexDirection = 'column'; // Metin ve resmi dikey olarak yerleştir
      modalImage.style.maxHeight = '50vh'; // Yükseklik sınırlaması
      modalImage.style.width = '100%'; // Genişlik sınırlaması
      modalText.style.width = '100%'; // Metin genişliğini genişlet
    } else {
      // Dikey resimler için mevcut düzeni koru
      modalImage.style.maxHeight = '100%'; // Yükseklik sınırlaması
    }
  }
});
