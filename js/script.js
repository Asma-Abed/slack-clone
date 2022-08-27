'use strict';

const sectionHero = document.querySelector('.hero');
const header = document.querySelector('.header');
const headerContainer = document.querySelector('.header__container');
const nav = document.getElementById('nav');
const navLogo = document.getElementById('nav-logo');
const navLinks = document.querySelector('.nav__links');
const navLink = document.querySelectorAll('.nav__link');
const linkHide = document.getElementById('hide-link');
const navSearchIcon = document.querySelector('.nav__search-icon');
const navDropIcon = document.querySelector('.nav__dropdown-icon');
const btnViolet = document.getElementById('btn-violet');
const btnWhite = document.getElementById('btn-white');
const navSearchBar = document.querySelector('.nav__search-bar');
const navCtaBtns = document.querySelector('.nav__cta-btns');
const searchBtn = document.querySelector('.btn__search');
const searchCloseIcon = document.querySelector('.search-bar__icon');

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
    navLink.forEach((el) => {
      el.classList.remove('nav__link--black');
    });
    btnViolet.classList.remove('btn--border-violet');
    btnWhite.classList.remove('btn--violet');
    navDropIcon.classList.remove('nav__dropdown-icon--black');
    navSearchIcon.classList.remove('nav__search-icon--black');
    nav.classList.remove('nav__sticky');
    navLogo.src = '../img/logo.png';
    navLogo.className = 'header__logo';
  }
  // else if (entry.isIntersecting && navSearchIcon.clicked === true) {
  //   navSearchBar.style.display = 'block';
  //   navSearchIcon.classList.remove('nav__search-icon--black');
  //   nav.classList.remove('nav__sticky');
  //   navLogo.src = '../img/logo.png';
  //   navLogo.className = 'header__logo';
  // } else if (entry.isIntersecting && navSearchIcon.clicked === false) {
  //   navSearchIcon.classList.remove('nav__search-icon--black');
  //   nav.classList.remove('nav__sticky');
  //   navLogo.src = '../img/logo.png';
  //   navLogo.className = 'header__logo';
  //   navLink.forEach((el) => {
  //     el.classList.remove('nav__link--black');
  //   });

  //   btnViolet.classList.remove('btn--border-violet');
  //   btnWhite.classList.remove('btn--violet');
  //   navDropIcon.classList.remove('nav__dropdown-icon--black');
  // }
};

const sectionHeroObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.7,
});

sectionHeroObserver.observe(sectionHero);

navSearchIcon.addEventListener('click', () => {
  nav.classList.add('nav__sticky');
  nav.classList.add('nav__sticky--padding');
  headerContainer.style.gap = '2vw';
  navLogo.src = '../img/logo-black.png';
  navLogo.className = 'header__logo-sticky';
  navLinks.style.display = 'none';
  linkHide.classList.add('nav__link--hide');
  navSearchBar.style.display = 'block';
  navCtaBtns.style.display = 'none';
  navSearchIcon.classList.add('nav__search-icon--black');
  searchBtn.style.display = 'block';
});

searchCloseIcon.addEventListener('click', () => {
  nav.classList.remove('nav__sticky');
  nav.classList.remove('nav__sticky--padding');
  headerContainer.style.gap = '8vw';
  navLogo.src = '../img/logo.png';
  navLogo.className = 'header__logo';
  navLinks.style.display = 'flex';
  linkHide.classList.remove('nav__link--hide');
  navSearchBar.style.display = 'none';
  navCtaBtns.style.display = 'flex';
  navSearchIcon.classList.remove('nav__search-icon--black');
  searchBtn.style.display = 'none';
});
