const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  speed: 400,
  spaceBetween : 50,
  autoplay: {
    delay: 4000
  },
  // Navigation arrows
  loop: true,
  direction: 'horizontal',
});