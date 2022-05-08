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
  } else {
    scrollIntoView(link)
  }
});

//Handle click on the "contact me" button
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', ()=>{
  scrollIntoView('#contact')
});

