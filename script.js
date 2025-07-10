// Mobile menu toggle functionality
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

if (toggleBtn && toggleBtnIcon && dropDownMenu) {
  toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  };
}

// Close dropdown when clicking outside
document.addEventListener('click', function (event) {
  if (dropDownMenu && !event.target.closest('header')) {
    dropDownMenu.classList.remove('open');
    if (toggleBtnIcon) {
      toggleBtnIcon.classList = 'fa-solid fa-bars';
    }
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
      });
    }
  });
});

// Handle video loading errors
document.addEventListener('DOMContentLoaded', function () {
  const video = document.querySelector('.banner video');
  if (video) {
    video.addEventListener('error', function () {
      console.log('Video failed to load, using fallback background');
      const banner = document.querySelector('.banner');
      if (banner) {
        banner.style.background = 'linear-gradient(45deg, #1a1a1a, #2d2d2d)';
      }
    });
  }

  // Handle image loading errors
  const images = document.querySelectorAll('img');
  images.forEach((img) => {
    img.addEventListener('error', function () {
      this.style.display = 'none';
      console.log('Image failed to load:', this.src);
    });
  });
});

console.log('Dodi Sanjaya Portfolio - Website loaded successfully!');

const searchInput = document.getElementById('searchInput');
const articleList = document.getElementById('articleList');
const listItems = articleList.querySelectorAll('li');

searchInput.addEventListener('input', function () {
  const searchTerm = searchInput.value.toLowerCase();

  if (searchTerm.trim() === '') {
    articleList.style.display = 'none';
    return;
  }

  let found = false;
  listItems.forEach((item) => {
    const text = item.textContent.toLowerCase();
    const match = text.includes(searchTerm);
    item.style.display = match ? 'block' : 'none';
    if (match) found = true;
  });

  articleList.style.display = found ? 'block' : 'none';
});
