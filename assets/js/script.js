//selectors

const navItemContainer = document.querySelector(".navitem__container");
const mobileToggle = document.querySelector(".mobile__toggle");


//hambutger menu

let activeMenu = () => {
    navItemContainer.classList.toggle('active')
    mobileToggle.classList.toggle('isactive')
    return
}


//event listener
mobileToggle.addEventListener('click' , activeMenu)