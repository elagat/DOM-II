// Change color of nav items on mouseover & mouseout ( 1, 2)

let navColor = document.querySelector('nav');
navColor.addEventListener('mouseover', event => {
  event.target.style.color = 'dodgerblue';
});

navColor.addEventListener('mouseout', event => {
  event.target.style.color = 'pink';
});

// Change banner image on click & doubleclick (3, 4)

let bannerImage = document.querySelector('img');
bannerImage.addEventListener('click', event => {
  event.target.style.border = '3px solid dodgerblue';
});

bannerImage.addEventListener('dblclick', event => {
  event.target.style.border = '3px solid pink';
})

// Change ... on scroll (5)

window.addEventListener('scroll', event => {
  alert('You are scrolling');
});

// Change h1 title on drag (6)

let title = document.querySelector('h1');
title.addEventListener('drag', event => {
  event.target.textContent = 'Funny Bus';
});

// Change h2 titles on keydown (6)

// let titleSmall = document.querySelectorAll('h2');
// titleSmall.addEventListener('keydown', event => {
//   event.target.style.color = 'dodgerblue';
// })

// Change h2 titles on drop

// let button = document.querySelectorAll('btn');
// pinkHouse.addEventListener('drop', event => {
//   event.target.style.border = '3px solid dodgerblue';
// })
