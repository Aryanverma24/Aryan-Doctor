'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


/**
 * PRELOADER
 * 
 * preloader will be visible until document load
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



/**
 * MOBILE NAVBAR
 * 
 * show the mobile navbar when click menu button
 * and hidden after click menu close button or overlay
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");


function crossbtn(){
  // console.log(navbar + "  "+ navTogglers + " " + overlay)
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

/**
 * HEADER & BACK TOP BTN
 * 
 * active header
 */

const header = document.querySelector("[data-header]");
const back_to_top=document.querySelector("[data-back-top-btn]");


const activeElementOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    back_to_top.classList.add("active");
  } else {
    header.classList.remove("active");
    back_to_top.classList.remove("active");
  }
}

window.addEventListener("scroll", activeElementOnScroll);


// scroll reveal

const revealElements = document.querySelectorAll("[data-reveal]");
const revealElementOnScroll = function(){
for(let i=0,len=revealElements.length;i<len;i++){
  if(revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15){
    revealElements[i].classList.add("revealed");
  }
  else{
    revealElements[i].classList.remove("revealed");
  }
}
}

window.addEventListener("scroll", revealElementOnScroll);
window.addEventListener("load", revealElementOnScroll);