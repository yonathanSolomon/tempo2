'use strict';

/*

display:block;
display:fixed;


Background-Images{
Background-position: top center;
Background-size :cover 
}

  animation: text_reveal 1s ease forwards;


#hero::after => psuedo 

Create a cool overlay {

    content : '';
    background-color:black;
    opacity:.7
}

z-index 

*/

const hamburger = document.querySelector(
  '.header  .nav-bar .nav-list  .hamburger'
);

const mobileMenu = document.querySelector('.header  .nav-bar .nav-list  ul');
const menuItems = document.querySelectorAll(
  '.header  .nav-bar .nav-list  ul li a'
);

const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  if (scroll > 250) header.style.backgroundColor = '#29323c';
  else header.style.backgroundColor = 'transparent';
});

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });
});

document.querySelectorAll('.contact-item').forEach(e => {
  e.addEventListener('click', el => {
    console.log(el.target);
  });
});
