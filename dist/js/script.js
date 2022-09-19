 // This is nav menu

 const hamburger = document.querySelector('.hamburger'),
       menu =  document.querySelector('.menu'),
       closeElem = document.querySelector('.menu__close'),
       menuLink = document.querySelectorAll('.menu__link');


hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});


menuLink.forEach (item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

window.addEventListener('click', (e) => {
    if (e.target == overlay) {
        menu.classList.remove('active');
    }
});

// This is progress bar 

const counters = document.querySelectorAll('.skills__progress-percent'),
      bars = document.querySelectorAll('.skills__progress-bar span');

counters.forEach( (item, i) => {
    bars[i].style.width = item.innerHTML;
});    

