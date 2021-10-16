'use strict';

// Make navbar transparent when it is on the top
const navbar=document.querySelector('#navbar');
const navbarHeight =navbar.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
console.log(window.scrollY)// 스크롤이될떄마다 이벤트를 실행하도록 
console.log(`navbarHeight:${navbarHeight}`)
if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});