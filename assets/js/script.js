//selectors
const navItemContainer = document.querySelector(".navitem__container");
const mobileToggle = document.querySelector(".mobile__toggle");
let loadingAnimation = document.querySelector(".animation");
const itemToggle = document.querySelector(".item__toggle");
const subMenu = document.querySelector(".submenu");
const exitButton = document.querySelector(".exit__button");
const popupSection = document.querySelector(".popup__section");
const alll = document.querySelector(".all");
const newO = document.querySelector(".new");
const offers = document.querySelector(".offers");




let sortBtns = document.querySelectorAll('.shuffle__item');
let sortItems = document.querySelectorAll('.product__item');




sortBtns.forEach( btn => {
  btn.addEventListener('click', (e) =>{
    for(const btnl of sortBtns ){
      btnl.classList.remove('lactive')
    }
    btn.classList.add('lactive')
    e.preventDefault
    const filter = e.target.dataset.filter
    //console.log(filter)
    sortItems.forEach((item)=>{
      if(filter == "all"){
        item.style.display = "flex"
      }else if (item.classList.contains(filter)){
        item.style.display = "flex"
      }else{
        item.style.display = "none"
      }
    })
  })
})






















// product transition effect

function lol() {
  let scrollPosition = window.scrollY;
  let products = document
    .querySelectorAll(".product__item")
    .forEach((product) => {
      if (window.innerWidth > 1023 && scrollPosition > 1016) {
        product.classList.add("effect");
      } else if (
        window.innerWidth > 767 &&
        scrollPosition > 1514.619873046875
      ) {
        product.classList.add("effect");
      } else if (window.innerWidth > 413 && scrollPosition > 863) {
        product.classList.add("effect");
      } else if (window.innerWidth > 374 && scrollPosition > 910) {
        product.classList.add("effect");
      } else if (window.innerWidth > 359 && scrollPosition > 910) {
        product.classList.add("effect");
      } else if (window.innerWidth > 319 && scrollPosition > 845) {
        product.classList.add("effect");
      }
    });
}

//hambutger menu

let activeMenu = () => {
  navItemContainer.classList.toggle("active");
  mobileToggle.classList.toggle("isactive");
  return;
};

//remove loading animation

let removeAnimation = () => {
  loadingAnimation.style.display = "none";
};

// show products list

let showList = () => {
  subMenu.classList.toggle("activel");
};

// popup exit button

let exitFunction = () => {
  popupSection.classList.add("none");
};
let addFunction = () => {
  popupSection.classList.remove("none");
};

//active filter

//event listeners

mobileToggle.addEventListener("click", activeMenu);
window.addEventListener("load", removeAnimation);
window.addEventListener("load", addFunction);
itemToggle.addEventListener("click", showList);
exitButton.addEventListener("click", exitFunction);
window.addEventListener("scroll", lol);