var hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  effect: 'slide',
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    forceToAxis: true,
  },
});
var reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    prevEl: '.reviews-slider__button--prev',
    nextEl: '.reviews-slider__button--next',
  },
  effect: 'slide',
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    forceToAxis: true,
  },
});
var menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', function () {
  document
    .querySelector('.navbar-button')
    .classList.toggle('navbar-button--visible');
});
