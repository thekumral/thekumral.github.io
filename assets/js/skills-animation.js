document.querySelectorAll('.skill img').forEach((img) => {
  img.addEventListener('mouseenter', () => {
    img.style.transform = 'rotateY(360deg)';
  });

  img.addEventListener('mouseleave', () => {
    img.style.transform = 'rotateY(0deg)';
  });
});
