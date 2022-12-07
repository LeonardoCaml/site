const imgs = document.getElementById('slides');
const img = document.querySelectorAll('#slides img');

let idx = 0;

function carrossel() {
    idx++;

    if(idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 650}px)`;
}

setInterval(carrossel, 5000);

// const menuItens = document.querySelectorAll('#nav a[href^="#"]');

// menuItens.forEach(item => {
//     item.addEventListener('click', easyScroll);
// });

// function getScrollTopByHref(element) {
//     const id = element.getAttribute('href');
//     return document.querySelector(id).offsetTop;
// }

// function easyScroll(event) {
//     event.preventDefault();
//     const to = getScrollTopByHref(event.target);

//     scrollToPosition(to);
// }

// function scrollToPosition(to) {
//     window.scroll({
//         top: to,
//         behavior: "smooth"
//     });
// }

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

const target = document.querySelectorAll('[data-anime]');
const animate = 'animate';

function animeScroll() {
    const windowTop = window.scrollY;
    target.forEach(function(element) {
        if((windowTop) > element.offsetTop - (window.innerHeight * 0.75)) {
            element.classList.add(animate);
        } else {
            element.classList.remove(animate);
        }
    });
}

animeScroll();

if(target.length) {
    window.addEventListener('scroll', debounce(() => {
        animeScroll();
        console.log('scroll checking');
    }, 200));
}