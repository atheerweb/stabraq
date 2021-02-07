//selectors
const navItemContainer = document.querySelector(".navitem__container");
const mobileToggle     = document.querySelector(".mobile__toggle");
let   loadingAnimation = document.querySelector(".animation")
const   itemToggle = document.querySelector(".item__toggle")
const subMenu    = document.querySelector('.submenu')
const exitButton = document.querySelector('.exit__button')
const popupSection = document.querySelector('.popup__section')




// product transition effect 

function lol (){
  let scrollPosition = window.scrollY
  console.log(scrollPosition)
  let products = document.querySelectorAll(".product__item").forEach((product) => {
     if ( window.innerWidth > 1023 && scrollPosition > 1016 ){
      product.classList.add('effect')
    }else if( window.innerWidth > 767 && scrollPosition >  1514.619873046875 ){
      product.classList.add('effect')
    }else if( window.innerWidth > 413 && scrollPosition >  863 ){
      product.classList.add('effect')
    }else if( window.innerWidth > 374 && scrollPosition >  910 ){
      product.classList.add('effect')
    }else if( window.innerWidth > 359 && scrollPosition >  910 ){
      product.classList.add('effect')
    }else if( window.innerWidth > 319 && scrollPosition >  845 ){
      product.classList.add('effect')
    }
  })
}



//hambutger menu

let activeMenu = () => {
    navItemContainer.classList.toggle('active')
    mobileToggle.classList.toggle('isactive')
    return
}

//remove loading animation

let removeAnimation = () => {
    loadingAnimation.style.display = "none" ;
}

// show products list 

let showList = () => {
  subMenu.classList.toggle('activel')
}

// popup exit button

let exitFunction = () =>{
  popupSection.classList.add('none')
}
let addFunction = () =>{
  popupSection.classList.remove('none')
}


//event listeners

mobileToggle.addEventListener('click' , activeMenu)
window.addEventListener('load' , removeAnimation)
window.addEventListener('load' , addFunction)
itemToggle.addEventListener('click' , showList)
exitButton.addEventListener('click' , exitFunction)
window.addEventListener('scroll' , lol  )












