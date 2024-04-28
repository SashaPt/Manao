export const handleScroll = () => {
  const header = document.querySelector('.header');
  window.addEventListener('scroll', function () {
    const a = window.pageYOffset || document.documentElement.scrollTop;
    if (a > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
};
