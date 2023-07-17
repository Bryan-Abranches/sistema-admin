console.log("start JS");

let buttonMobile = document.querySelector(".button-mobile");
let menuMobile = document.querySelector(".menu-mobile");
let buttonClose = document.querySelector(".button-close");

buttonMobile.addEventListener("click", buttonActive);
buttonClose.addEventListener("click", buttonActive);

function buttonActive() {
  menuMobile.className === "menu-mobile-active"
    ? (menuMobile.className = "menu-mobile")
    : (menuMobile.className = "menu-mobile-active");
}
