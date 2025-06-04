// script.js

window.addEventListener('DOMContentLoaded', () => {
  // 1) Gallery Carousel Logic
  const galleryImages = [
    {
      src: 'https://cdn.pixabay.com/photo/2017/08/01/08/29/cheetah-2567316_1280.jpg',
      alt: 'Cheetah standing in grass'
    },
    {
      src: 'https://cdn.pixabay.com/photo/2013/09/06/01/09/cheetah-179034_1280.jpg',
      alt: 'Cheetah looking ahead'
    },
    {
      src: 'https://cdn.pixabay.com/photo/2018/02/01/17/25/cheetah-3120206_1280.jpg',
      alt: 'Cheetah mid-run'
    },
    {
      src: 'https://cdn.pixabay.com/photo/2014/11/08/10/09/cheetah-522599_1280.jpg',
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
