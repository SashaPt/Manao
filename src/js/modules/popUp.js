export const controlScroll = (target) => {
  const page = document.querySelector('html');
  if (target.classList.contains('visible')) {
    page.classList.add('no-scroll');
  } else {
    page.classList.remove('no-scroll');
  }
};


export const popUp = (element, btns) => {
  if (element && btns.length) {
    btns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        element.classList.toggle('visible');
        controlScroll(element);
      });
    });
    if (element.classList.contains('pop-up') || element.classList.contains('header__nav-wrapper')) {
      element.addEventListener('click', ({ target }) => {
        if (!target.closest('.pop-up__window') && !target.closest('.header__nav')) {
          element.classList.toggle('visible');
          controlScroll(element);
        }
      });
    }
  }
};
