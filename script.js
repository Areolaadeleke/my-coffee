'use strict'

const ham = document.getElementById('hamburger-icon');
const mobile = document.querySelector('.mobile-menu');

ham.addEventListener('click', function(){
    ham.classList.toggle('open')
    mobile.classList.toggle('open')
})