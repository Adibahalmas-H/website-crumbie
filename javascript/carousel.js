const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 16,
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 120,
    modifier: 1.2,
    slideShadows: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
