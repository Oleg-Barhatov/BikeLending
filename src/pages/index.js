import './index.css';

const burgerMenu = document.querySelector('.header-mobile')

burgerMenu.addEventListener('click', (e) => {
  e.target.classList.toggle('header-mobile_open')
})