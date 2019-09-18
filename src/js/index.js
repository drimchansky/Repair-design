import Swiper from 'swiper';

let mySwiper = new Swiper('.swiper-container', {
  autoplay: {
    speed: 3000,
    delay: 5000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
