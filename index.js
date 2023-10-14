//start from the beggining when refresh the page
// window.onload = function () {
//   window.scrollTo(0, 0);
// };
//menu
const closeBtn = document.querySelector('.close-menu');
const openBtn = document.querySelector('.open-menu');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu-nav-link');
//menu links scrolling
menuLinks.forEach((item) => {
  item.addEventListener('click', () => {
    menu.classList.add('hidden');
  });
});
//toggle menu
const toggleMenu = () => {
  menu.classList.toggle('hidden');
};

openBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);
//testimonials slider slick
$('.testimonials-slider').slick({
  dots: false, // Add navigation dots
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1200,
  prevArrow: $('.testimonials-prev'),
  nextArrow: $('.testimonials-next'),
});
//---------------------------
//hero slider
let i = 0;
const btns = document.querySelectorAll('.nav-btn');
const heroImages = document.querySelectorAll('.hero-img');
const heroTextBox = document.querySelectorAll('.hero-text-box');
//for dots
const sliderNav = function (index) {
  btns.forEach((btn) => {
    btn.classList.remove('active');
  });
  heroImages.forEach((slide) => {
    slide.classList.remove('active');
  });
  heroTextBox.forEach((content) => {
    content.classList.remove('active');
  });
  i = index;
  btns[index].classList.add('active');
  heroImages[index].classList.add('active');
  heroTextBox[index].classList.add('active');
};
btns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    sliderNav(i);
  });
});
//for next and prev buttons

const heroNext = document.querySelector('.hero-next');
const heroPrev = document.querySelector('.hero-prev');

//hero next btn
heroNext.addEventListener('click', () => {
  if (i == btns.length - 1) return;

  btns[i].classList.remove('active');
  heroImages[i].classList.remove('active');
  heroTextBox[i].classList.remove('active');
  i++;

  btns[i].classList.add('active');
  heroImages[i].classList.add('active');
  heroTextBox[i].classList.add('active');
});
//hero prev btn
heroPrev.addEventListener('click', () => {
  if (i == 0) return;
  btns[i].classList.remove('active');
  heroImages[i].classList.remove('active');
  heroTextBox[i].classList.remove('active');
  i--;

  btns[i].classList.add('active');
  heroImages[i].classList.add('active');
  heroTextBox[i].classList.add('active');
});
//---------------------------

//loader
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader-container');
  loader.classList.add('loader-hidden');
});
//---------------------------

//scrolling

const sections = document.querySelectorAll('section');

// Define the options for the IntersectionObserver
const options = {
  root: null, //  the viewport is the root
  rootMargin: '0px', // No margin is added to the root's bounding box
  threshold: 0.5, // The threshold for triggering the callback is set to 50%
};

//
const observer = new IntersectionObserver((entries) => {
  // For each entry, check if it's intersecting with the root
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // If the entry is intersecting, add the 'fade-in-bottom' class to the target element
      entry.target.classList.add('fade-in-bottom');
    }
  });
}, options);

// Apply the IntersectionObserver to each 'section' element
sections.forEach((section) => {
  observer.observe(section); // Start observing each 'section' element
});
