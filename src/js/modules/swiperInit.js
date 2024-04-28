import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export const swiperInit = () => {
  const swiper = new Swiper('.swiper', {
    loop: true,
    modules: [Navigation],
    navigation: {
      nextEl: document.querySelector('.swiper-button-next'),
      prevEl: document.querySelector('.swiper-button-prev'),
    },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      600: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      950: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
};
