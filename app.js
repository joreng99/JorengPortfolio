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

//Handle scrolling when Tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event)=>{
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link);
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

//Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project')
workBtnContainer.addEventListener('click', (e)=>{
  const filter = e.target.dataset.filter;
  if (filter == null) {
    returen;
  }

  //Remove selection from the previous item and select the new one
  const active = document.querySelector('.category__btn.selected');
  active.classList.remove('selected');
  e.target.classList.add('selected');

  projectContainer.classList.add('anim-out');
  setTimeout(()=>{
    projects.forEach((project) => {
      const projectType = project.dataset.type;
      if (filter === '*' || filter === projectType) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out')
  }, 300);
});

//Make border line on the navbar menu when the section is shown

const sectionIds = [
  '#home',
  '#about',
  '#skill',
  '#work',
  '#testimonials',
  '#contact',
];


const sections = sectionIds.map(id => document.querySelector(id));
const navItems = sectionIds.map(id => document.querySelector(`[data-link="${id}"]`));
let selectedNavIndex = 0;
let selectedNavItem = navItems[0];

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.4,
};
const observerCallback = (entries, observer) => {
  entries.forEach(entry =>{
    if(!entry.isIntersecting && entry.intersectionRatio > 0) {
      const index = sectionIds.indexOf(`#${entry.target.id}`);
      if (entry.boundingClientRect.y < 0 ) {
        selectedNavIndex = index + 1;
      } else {
        selectedNavIndex = index - 1;
      }
    }
  });
};
const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observe(section));

window.addEventListener('wheel',() => {
  if (window.scrollY === 0) {
    selectedNavIndex = 0;
  } else if (Math.round(window.scrollY + window.innerHeight) >= document.body.clientHeight) {
    selectedNavIndex = navItems.length - 1;
  }
  selectNavItem(navItems[selectedNavIndex]);
});

// function

function selectNavItem(selected) {
  selectedNavItem.classList.remove('active');
  selectedNavItem = selected;
  selectedNavItem.classList.add('active');
}

function scrollIntoView(selector){
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior:'smooth'});
  selectNavItem(navItems[sectionIds.indexOf(selector)]);
}

