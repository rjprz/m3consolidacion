//Selectores html 

const chatIcon = document.querySelector(".navbar__chats");
const chatSearch = document.querySelector(".navbar__search");
//const chatIcon = document.querySelector(".navbar");
const ventanaChats = document.querySelector(".chats-recientes-contenedor");
const botonBack = document.querySelector(".navbar__back");
const menu = document.querySelector(".navbar__menu");
const navbar = document.querySelector("nav");
const chatRecientes = document.querySelectorAll(".chat-recientes__chats");
const dropDownButton = document.querySelector(".chat__icon-clip");
const dropDownMenu = document.querySelector(".chat__drop-down");


//FUNCIONES

const ventanaAbajo = function () {
  chatIcon.style.display = "none";
  chatSearch.style.display = "block";
  botonBack.style.display = "block";
  ventanaChats.style.transform = "translateY(0)";
};
const ventanaArriba = function () {
  botonBack.style.display = "none";
  chatIcon.style.display = "block";
  chatSearch.style.display = "none";
  ventanaChats.setAttribute("style", "transform: translateY(-120vh)");
};


// ESCUCHA DE EVENTOS DE ELEMENTOS HTML

chatIcon.addEventListener("click", ventanaAbajo);
botonBack.addEventListener("click", ventanaArriba);

menu.addEventListener("click", function () {
  navbar.classList.toggle("navbar-open");
});

chatRecientes.forEach((chat) => {
  chat.addEventListener("click", function () {
    // chat.setAttribute("style", "font-weight: 400;");
    chat.childNodes[3].children[1].setAttribute("style", "font-weight: 400;");
  });
});

dropDownButton.addEventListener("mouseover", function () {
  dropDownMenu.style.display = "block";
});
dropDownButton.addEventListener("mouseout", function () {
  dropDownMenu.style.display = "none";
});

//evitar bug al abrir menu chats en modo mobil y luego pasar a modo desktop

const mql = window.matchMedia("(min-width: 576px)");

mql.onchange = (e) => {
  if (e.matches) {
    /* the viewport is 576px pixels wide or more */
    ventanaAbajo();
    botonBack.style.display = "none";
  } else {
    /* the viewport is more than 600 pixels wide */
    ventanaArriba();
  }
};
