// Animasi fade-in saat scroll
const cards = document.querySelectorAll('.card');
window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }
  });
});

const navbar = document.querySelector('header.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('shrink');
  } else {
    navbar.classList.remove('shrink');
  }
});

const video = document.querySelector(".about-video");

video.addEventListener("loadedmetadata", () => {
  video.currentTime = 0;
});

video.addEventListener("timeupdate", () => {
  if (video.currentTime >= 9) {
    video.currentTime = 0;
  }
});