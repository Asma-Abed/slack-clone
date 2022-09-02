'use strict';

const sectionHero = document.querySelector('.hero');
const sectionFeatured = document.querySelector('.featured');
const header = document.querySelector('.header');
const headerContainer = document.querySelector('.header__container');
const nav = document.getElementById('nav');
const navLogo = document.getElementById('nav-logo');
const navLinks = document.querySelector('.nav__links');
const navLink = document.querySelectorAll('.nav__link');
const linkHide = document.getElementById('hide-link');
const navSearchIcon = document.querySelector('.nav__search-icon');
const navMenuIcon = document.querySelector('.nav__menu-icon');
const navDropIcon = document.querySelector('.nav__dropdown-icon');
const btnViolet = document.getElementById('btn-violet');
const btnWhite = document.getElementById('btn-white');
const navSearchBar = document.querySelector('.nav__search-bar');
const navCtaBtns = document.querySelector('.nav__cta-btns');
const searchBtn = document.querySelector('.btn__search');
const searchCloseIcon = document.querySelector('.search-bar__icon');
const searchBarInput = document.querySelector('.search-bar__input');
const searchBarOptions = document.querySelector('.search-bar__dropdown-menu');
const main = document.getElementById('main');
const footerLink = document.querySelectorAll('.footer__list-heading');
const footerIconMobile = document.querySelectorAll('.footer__icon-right');
const footerList = document.querySelector('.footer__list');

// ADDING THE STICKY NAV
// //////////////////////////
const stickyNav = (entries) => {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) {
    nav.classList.add('nav__sticky');
    navLogo.src = '../img/logo-black.png';
    navLogo.className = 'header__logo-sticky y';
    navLink.forEach((el) => {
      el.classList.add('nav__link--black');
    });
    navSearchIcon.classList.add('nav__search-icon--black');
    navMenuIcon.style.fill = '#000';
    btnViolet.classList.add('btn--border-violet');
    btnWhite.classList.add('btn--violet');
    navDropIcon.classList.add('nav__dropdown-icon--black');
    document
      .querySelector('.nav__menu-icon')
      .classList.remove('nav__menu-icon-display');
  } else {
    navLink.forEach((el) => {
      el.classList.remove('nav__link--black');
    });
    btnViolet.classList.remove('btn--border-violet');
    btnWhite.classList.remove('btn--violet');
    navDropIcon.classList.remove('nav__dropdown-icon--black');
    navSearchIcon.classList.remove('nav__search-icon--black');
    navMenuIcon.style.fill = '#fff';
    nav.classList.remove('nav__sticky');
    navLogo.src = '../img/logo.png';
    navLogo.className = 'header__logo ';
    document
      .querySelector('.nav__menu-icon')
      .classList.remove('nav__menu-icon-display');
  }
};

const sectionHeroObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.2,
  // rootMargin: '-100px',
});

sectionHeroObserver.observe(sectionHero);

// ADDING THE SEARCH BAR ON CLICK
// ///////////////////////////////////
navSearchIcon.addEventListener('click', () => {
  sectionHeroObserver.unobserve(sectionHero);

  nav.classList.add('nav__sticky');

  nav.classList.add('nav__sticky--padding');
  headerContainer.style.gap = '2vw';
  navLogo.src = '../img/logo-black.png';
  navLogo.className = 'header__logo-sticky header__logo-display';
  navLinks.classList.add('nav__links-display');
  linkHide.classList.add('nav__link--hide');
  navSearchBar.style.display = 'block';
  // navCtaBtns.style.display = 'none';
  navCtaBtns.classList.add('nav__cta-btn-display');
  navSearchIcon.classList.add('nav__search-icon--black');
  searchBtn.style.display = 'block';
  document
    .querySelector('.nav__menu-icon')
    .classList.add('nav__menu-icon-display');
  // document.querySelector('.nav__btns').style.marginRight = '0';
});

// REMOVING SEARCH BAR ON CLICK
// //////////////////////////////////
searchCloseIcon.addEventListener('click', () => {
  sectionHeroObserver.observe(sectionHero);

  navLink.forEach((el) => {
    el.classList.add('nav__link--black');
  });
  nav.classList.remove('nav__sticky--padding');
  navLogo.className = 'header__logo-sticky';
  btnViolet.classList.add('btn--border-violet');
  btnWhite.classList.add('btn--violet');
  navDropIcon.classList.add('nav__dropdown-icon--black');
  navLinks.classList.remove('nav__links-display');
  linkHide.classList.remove('nav__link--hide');
  navSearchBar.style.display = 'none';
  // navCtaBtns.style.display = 'flex';
  navCtaBtns.classList.remove('nav__cta-btn-display');
  searchBtn.style.display = 'none';
  document
    .querySelector('.nav__menu-icon')
    .classList.remove('nav__menu-icon-display');
});

header.addEventListener('click', (e) => {
  if (e.target === searchBarInput)
    searchBarOptions.classList.add('search-bar__dropdown-menu--shown');
  if (e.target !== searchBarInput)
    searchBarOptions.classList.remove('search-bar__dropdown-menu--shown');
});

main.addEventListener('click', () => {
  searchBarOptions.classList.remove('search-bar__dropdown-menu--shown');
});

footerList.addEventListener('click', (e) => {
  console.log(e.target);
  // console.log(e.target.parentElement.parentElement);
  if (e.target.classList.contains('footer__list-heading')) {
    e.target
      .querySelector('.footer__icon-right')

      .classList.toggle('footer__rotate');

    console.log(e.target.nextElementSibling);
    e.target.nextElementSibling.classList.toggle('footer__mobile-list-links');
  }
  if (e.target.classList.contains('use')) {
    const parent = e.target.parentElement;
    const secParent = parent.parentElement;
    parent.classList.toggle('footer__rotate');
    secParent.nextElementSibling.classList.toggle('footer__mobile-list-links');
  }
  if (e.target.classList.contains('footer__icon-right')) {
    const parent = e.target.parentElement;
    e.target.classList.toggle('footer__rotate');
    parent.nextElementSibling.classList.toggle('footer__mobile-list-links');
  }
});
