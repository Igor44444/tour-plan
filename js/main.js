$(document).ready(function () {
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
  var menuButton = $('.menu-button');
  menuButton.on('click', function () {
    document.$('.navbar-button').toggleClass('navbar-button--visible');
  });

  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  // nastaivaem kake okno budet otkryvatsya
  function openModal() {
    var targetModal = $(this).attr('data-href');
    $(targetModal).find('.modal__overlay').addClass('modal__overlay--visible');
    $(targetModal).find('.modal__dialog').addClass('modal__dialog--visible');
  }
  // nastaivaem sakrytie okna
  function closeModal(event) {
    // shtoby ne perebrasyvalo vverh posle zakryvaniya okna
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }
});
