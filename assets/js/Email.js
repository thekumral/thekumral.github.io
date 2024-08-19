document.addEventListener('DOMContentLoaded', function () {
  emailjs.init('dqXEQDN5rBsF-PAL7'); // EmailJS User ID'nizi buraya ekleyin

  document
    .getElementById('contactForm')
    .addEventListener('submit', function (event) {
      event.preventDefault(); // Formun yeniden yüklenmesini engelle

      emailjs
        .sendForm('service_githubPortfolioC', 'template_y3pjfy1', this)
        .then(
          function () {
            alert('Email successfully sent!');
            document.getElementById('contactForm').reset(); // Formu temizle
          },
          function (error) {
            alert('Failed to send email. Please try again.');
            console.log('Failed to send email: ', error);
          }
        );
    });
});
