const btnHamburger = document.getElementById('button-hamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', () => {
  if (header.classList.contains('open')) {
    document.body.classList.remove('noscroll');
    header.classList.remove('open');
    fadeElems.forEach((el) => {
      el.classList.remove('fade-in');
      el.classList.add('fade-out');
    });
  } else {
    document.body.classList.add('noscroll');
    header.classList.add('open');
    fadeElems.forEach((el) => {
      el.classList.remove('fade-out');
      el.classList.add('fade-in');
    });
  }
});
