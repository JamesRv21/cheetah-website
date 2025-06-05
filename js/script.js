// script.js

window.addEventListener('DOMContentLoaded', () => {
  // 1) Gallery Carousel Logic
  const galleryImages = [
    {
      src: 'images/cheetah1.jpeg',
      alt: 'Cheetah Running Fast '
    },
    {
      src: 'images/cheetah2.jpeg',
      alt: 'Cheetah Looking Ahead'
    },
    {
      src: 'images/cheetah3.jpeg',
      alt: 'Cubs'
    },
    {
      src: 'images/cheetah4.jpeg',
      alt: 'Cheetah standing on a rock'
    }
  ];

  const carouselImg = document.getElementById('carousel-image');
  const carouselCaption = document.getElementById('carousel-caption');

  if (carouselImg) {
    let currentIndex = 0;

    // Set initial image
    function updateImage(index) {
      carouselImg.src = galleryImages[index].src;
      carouselImg.alt = galleryImages[index].alt;
      carouselCaption.textContent = galleryImages[index].alt;
    }

    updateImage(currentIndex);

    setInterval(() => {
      currentIndex = (currentIndex + 1) % galleryImages.length;
      updateImage(currentIndex);
    }, 3000);

    // Resize image to fit most of the viewport
    const resizeImage = () => {
      carouselImg.style.width = '100vw';
      carouselImg.style.height = '90vh';
      carouselImg.style.objectFit = 'cover';
    };

    resizeImage();
    window.addEventListener('resize', resizeImage);
  }

  // 2) Highlight Active Nav Link
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.style.color = '#ffd700';
    }
  });
});

// Add this to the bottom of script.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from submitting

    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    const status = document.getElementById('form-status');

    // Basic email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (subject.value.trim() === '') {
          status.textContent = 'Subject is required.';
          subject.focus();
          return;
        }

    if (!emailPattern.test(email.value)) {
      status.textContent = 'Please enter a valid email address.';
      email.focus();
      return;
    }

    // Proceed to open mail client (fallback behavior)
    const mailtoLink = `mailto:info@apd.coach?subject=${encodeURIComponent(subject.value)}&body=${encodeURIComponent(message.value)}%0A%0AFrom: ${email.value}`;
    window.location.href = mailtoLink;
    status.textContent = '';
  });
});



function loadHTML(id, file) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error(`Failed to load ${file}`);
      return response.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(err => console.error(err));
}

window.addEventListener('DOMContentLoaded', () => {
  loadHTML('header', 'components/header.html');
  loadHTML('footer', 'components/footer.html');

  // You can also keep your other script logic here
});
