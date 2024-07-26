const chatIcon = document.querySelector(".navbar__chats");
//const chatIcon = document.querySelector(".navbar");

const ventanaChats = document.querySelector(".chats-recientes-contenedor");
const botonBack = document.querySelector(".navbar__back");
const menu = document.querySelector(".navbar__menu");
const navbar = document.querySelector("nav");

chatIcon.addEventListener("click", function () {
  chatIcon.style.display = "none";
  botonBack.style.display = "block";
  ventanaChats.style.transform = "translateY(0)";
});

botonBack.addEventListener("click", function () {
  botonBack.style.display = "none";
  chatIcon.style.display = "block";
  ventanaChats.setAttribute("style", "transform: translateY(-120vh)");
});

menu.addEventListener("click", function () {
  navbar.classList.toggle("navbar-open");
});
