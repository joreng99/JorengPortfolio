'use strict';

//Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

function scrollIntoView(selector){
  const scrollTo = document.querySelector(selector)
  scrollTo.scrollIntoView({behavior:'smooth'});
}

//Handle scrolling when Tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event)=>{
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link)
  navbarMenu.classList.remove('open')
});

//Show menu when toggle is clicked
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', ()=>{
  navbarMenu.classList.toggle('open');
});

//Handle click on the "contact me" button
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', ()=>{
  scrollIntoView('#contact')
});

// Make home slowly fade to transparent as the window scrolls down
const homeContainer = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  homeContainer.style.opacity = 1-window.scrollY/homeHeight; 
});

//Show arrow up btn when scrolling down
const arrowUp = document.querySelector('.arrowUp');
document.addEventListener('scroll', ()=>{
  if (window.scrollY > homeHeight/2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

//Handle click on the arrow up btn
arrowUp.addEventListener('click', ()=>{
  scrollIntoView('#home');
})
