// script.js

window.addEventListener('DOMContentLoaded', () => {
  // 1) Gallery Carousel Logic
  const galleryImages = [
    {
      src: 'cheetah1.jpeg',
      alt: 'Cheetah standing in grass'
    },
    {
      src: 'cheetah2.jpeg',
      alt: 'Cheetah looking ahead'
    },
    {
      src: 'cheetah3.jpeg',
      alt: 'Cheetah mid-run'
    },
    {
      src: 'cheetah4.jpeg',
      alt: 'Cheetah lounging on rock'
    }
  ];

  const carouselImg = document.getElementById('carousel-image');
  const carouselCaption = document.getElementById('carousel-caption');
  if (carouselImg) {
    let currentIndex = 0;
    // Initialize
    carouselImg.src = galleryImages[0].src;
    carouselImg.alt = galleryImages[0].alt;
    carouselCaption.textContent = galleryImages[0].alt;

    setInterval(() => {
      currentIndex = (currentIndex + 1) % galleryImages.length;
      carouselImg.src = galleryImages[currentIndex].src;
      carouselImg.alt = galleryImages[currentIndex].alt;
      carouselCaption.textContent = galleryImages[currentIndex].alt;
    }, 3000); // Change every 3 seconds
  }

  // 2) Highlight Active Nav Link (optional)
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.style.color = '#ffd700';
    }
  });
});
