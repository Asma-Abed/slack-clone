'use strict';

const sectionHero = document.querySelector('.hero');
const header = document.querySelector('.header');
const nav = document.getElementById('nav');
const navLogo = document.getElementById('nav-logo');
const navLink = document.querySelectorAll('.nav__link');
const navSearchIcon = document.querySelector('.nav__search-icon');
const navDropIcon = document.querySelector('.nav__dropdown-icon');
const btnViolet = document.getElementById('btn-violet');
const btnWhite = document.getElementById('btn-white');

console.log(navLink);

const stickyNav = (entries) => {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) {
    nav.classList.add('nav__sticky');
    navLogo.src = '../img/logo-black.png';
    navLogo.className = 'header__logo-sticky';
    navLink.forEach((el) => {
      el.classList.add('nav__link--black');
    });
    navSearchIcon.classList.add('nav__search-icon--black');
    btnViolet.classList.add('btn--border-violet');
    btnWhite.classList.add('btn--violet');
    navDropIcon.classList.add('nav__dropdown-icon--black');
  } else {
    nav.classList.remove('nav__sticky');
    navLogo.src = '../img/logo.png';
    navLogo.className = 'header__logo';
    navLink.forEach((el) => {
      el.classList.remove('nav__link--black');
    });
    navSearchIcon.classList.remove('nav__search-icon--black');
    btnViolet.classList.remove('btn--border-violet');
    btnWhite.classList.remove('btn--violet');
    navDropIcon.classList.remove('nav__dropdown-icon--black');
  }
};

const sectionHeroObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.7,
});

sectionHeroObserver.observe(sectionHero);
