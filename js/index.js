// Change color of nav items on mouseover & mouseout ( 1, 2)

let navColor = document.querySelector('nav');
navColor.addEventListener('mouseover', event => {
  event.target.style.color = 'dodgerblue';
});

navColor.addEventListener('mouseout', event => {
  event.target.style.color = 'pink';
})

// Change banner image on click (3)

let bannerImage = document.querySelector('img');
bannerImage.addEventListener('click', event => {
  event.target.style.border = '2px solid dodgerblue';
})

// Change h1 title on drag (4)

let title = document.querySelector('h1');
title.addEventListener('drag', event => {
  event.target.textContent = 'Funny Bus';
})
