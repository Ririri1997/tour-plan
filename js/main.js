$(document).ready(function () {
  const hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      prevEl: '.hotel-slider__button--prev',
      nextEl: '.hotel-slider__button--next',
    },
  });
  const reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      prevEl: '.reviews-slider__button--prev',
      nextEl: '.reviews-slider__button--next',
    },
  });
  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on('click', openModal);
  closeModalButton.on("click", closeModal )

  function openModal(){
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  
  // обработка форм
    $(".form").each(function(){
      $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required:  "Укажите имя",
          minlength: "Имя должно быть не короче двух букв", 
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        },
        phone: {
            required: "Телефон обязателен",
        },
      },
    });
  })
    $(".phone").mask("+7(999) 999-9999");
});
