//selectors

const navItemContainer = document.querySelector(".navitem__container");
const mobileToggle = document.querySelector(".mobile__toggle");
let   loadingAnimation = document.querySelector(".animation")


//hambutger menu

let activeMenu = () => {
    navItemContainer.classList.toggle('active')
    mobileToggle.classList.toggle('isactive')
    return
}

let removeAnimation = () => {
    loadingAnimation.style.display = "none" ;
}

//event listener
mobileToggle.addEventListener('click' , activeMenu)
window.addEventListener('load' , removeAnimation)































//Loading animation
const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

const blurring = () => {
  load++;
  if (load > 99) clearInterval(int);
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
};

// For reference: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

let int = setInterval(blurring, 30);