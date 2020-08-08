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
    $('.navbar-button').toggleClass('navbar-button--visible');
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
  //obrabotka form
  $('.form').each(function () {
    $(this).validate({
      errorClass: 'invalid',
      messages: {
        name: {
          required: 'Please specify your name',
          minlength: 'Minimum length 3 characters',
        },
        email: {
          required: 'your email help us to contact you',
          email: 'Your email address must be in the format of name@domain.com',
        },
        phone: {
          required: 'you forgot your phone number',
          minlength: 'minimum length 11 characters',
        },
      },
    });
  });
  AOS.init();
  $('.map').addEventListener('mouseover', () => {
    this.innerHTML = `
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423282.1813973622!2d-118.41173606237231!3d34.02098198399712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2be4e9ec210a7%3A0x98c2af521186a3cd!2sHilton%20Los%20Angeles%2FUniversal%20City!5e0!3m2!1sen!2sus!4v1595634525408!5m2!1sen!2sus"
        width="100%"
        height="213"
        frameborder="0"
        style="border: 0;"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    `;
  });
});
