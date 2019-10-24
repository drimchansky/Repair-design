import Swiper from 'swiper';
import Videos from './video';
import './exhib';
import './steps';
import './stub';

const mySwiper = new Swiper('.swiper-container', {
  loop: true,
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

setTimeout(Videos(), 2000);
