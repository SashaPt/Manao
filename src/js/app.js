import * as flsFunctions from './modules/functions.js';
import { handleForm } from './modules/handleForm.js';
import { handleScroll } from './modules/handleScroll.js';
import { popUp } from './modules/popUp.js';
import { swiperInit } from './modules/swiperInit.js';

const onLoad = () => {
  const modal = document.querySelector('.pop-up');
  const modalBtns = document.querySelectorAll('.pop-up__close');
  const menu = document.querySelector('.header__nav-wrapper');
  const menuBtns = document.querySelectorAll('.header__nav-top .close, .burger');
  const form = document.querySelector('form');
  const menuLinks = document.querySelectorAll('.header__menu-item a');

  flsFunctions.isWebp();
  handleScroll();
  swiperInit();
  handleForm(form);
  popUp(modal, modalBtns);
  popUp(menu, menuBtns);

  menuLinks.forEach((link) => link.addEventListener('click', () => menu.classList.remove('visible')));
};

window.addEventListener('DOMContentLoaded', onLoad);
