const imgs = document.getElementById('slides');
const img = document.querySelectorAll('#slides img');

let idx = 0;

function carrossel() {
    idx++;

    if(idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 50}vw)`;
}

setInterval(carrossel, 5000);

const icon = document.querySelector(".menu");
const icon2 = document.querySelector(".menu2");

icon.addEventListener("click", () => {
    const barra = document.querySelector(".menuBar");
    
    if(icon) {
        barra.style.transform = `translateX(-50vh)`;
        barra.style.width = `50%`;
        icon.classList.add("alter");
        icon2.classList.remove("alter");
    }
});
icon2.addEventListener("click", () => {
    const barra = document.querySelector(".menuBar");
    
    if(icon2) {
        barra.style.transform = `translateX(50vh)`;
        barra.style.width = `0`;
        icon2.classList.add("alter");
        icon.classList.remove("alter");
    }
});

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