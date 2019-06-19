// Change color of nav items on mouseover & mouseout ( 1, 2)

let navColor = document.querySelector('nav');
navColor.addEventListener('mouseover', event => {
  event.target.style.color = 'dodgerblue';
});

navColor.addEventListener('mouseout', event => {
  event.target.style.color = 'pink';
});

//Stop nav items from refreshing Page
 navColor.addEventListener('click', event => {
   event.preventDefault();
 });

// Change banner image on click & doubleclick (3, 4)

let bannerImage = document.querySelector('img');
bannerImage.addEventListener('click', event => {
  event.target.style.border = '3px solid dodgerblue';
});

bannerImage.addEventListener('dblclick', event => {
  event.target.style.border = '3px solid pink';
})

// Alert on scroll (5)

window.addEventListener('scroll', event => {
  alert('You are scrolling');
});

// Change h1 title on drag (6)

let title = document.querySelector('h1');
title.addEventListener('drag', event => {
  event.target.textContent = 'Funny Bus';
});

// Alert on load (7)

window.addEventListener('load', event => {
  alert('Page is fully loaded');
});

// Alert on keydown (8)

window.addEventListener('keydown', event => {
  alert('You have pressed a key');
});

// Change buttons on wheel (9)

let button = document.querySelectorAll('btn');
button.addEventListener('mouseover', event => {
  event.target.style.backgroundColor = 'pink';
});

// Alert on copy (10)

source.addEventListener('copy', event => {
  alert('Copy that')
});

// Nest and prevent propagation

let buttonDiv = document.getElementsByClassName('destination');
buttonDiv.addEventListener('mouseover', event => {
  event.target.style.background = 'dodgerblue';
  event.preventDefault;
});
