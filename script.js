let navbar = document.querySelector("nav");
let menulinks = document.getElementById("menu-links");

function toogleMenu(){
    menulinks.classList.toogle("show-menu");
}

window.onscroll = function () {
  if (window.scrollY > 0) {
    navbar.style.background = "#eefff9";
  } else {
    navbar.style.background = "transparent";
  }
};
