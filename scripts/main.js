'use strict';

let buttonBar = document.querySelector('.button-bar');

function resetOverflow(event) {
  console.log(event.animationName);
  setTimeout(function () {
    buttonBar.style.overflow = 'initial';
  }, 200);
}

buttonBar.addEventListener('animationstart', resetOverflow);