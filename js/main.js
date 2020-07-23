var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
  effect: 'slide',
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    forceToAxis: true,
  },
});
