'use strict'

const images = document.querySelectorAll('.infinity-slider img');
let count = 0;

// slider - remove class css -opacity-0
function slider() {
   for (let i = 0; i < images.length; i++) {
      images[i].classList.add('opacity-0');
   }
   images[count].classList.remove('opacity-0');
   console.log(count);
}
slider();

// button prev
document.querySelector('.slider-prev').addEventListener('click', function () {
   if (count - 1 == -1) {
      count = images.length - 1;
   } else {
      count--;
   }
   slider();
});

// button next
document.querySelector('.slider-next').addEventListener('click', function () {
   if (count + 1 == images.length) {
      count = 0;
   } else {
      count++;
   }
   slider();
});

// автолистание слайдера

let timer = setInterval(() => {
   if (count + 1 == images.length) {
      count = 0;
   } else {
      count++;
   }
   slider();
}, 5000);

// остановка автолистания

const btnPrev = document.querySelector('.slider-prev');
const btnNext = document.querySelector('.slider-next');

function stopInterval() {
   clearInterval(timer);
}

btnPrev.addEventListener('click', stopInterval);
btnNext.addEventListener('click', stopInterval);