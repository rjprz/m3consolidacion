const chatIcon = document.querySelector(".navbar__chats");
const chatSearch = document.querySelector(".navbar__search")
//const chatIcon = document.querySelector(".navbar");

const ventanaChats = document.querySelector(".chats-recientes-contenedor");
const botonBack = document.querySelector(".navbar__back");
const menu = document.querySelector(".navbar__menu");
const navbar = document.querySelector("nav");
const  chatRecientes = document.querySelectorAll(".chat-recientes__chats")

const dropDownButton = document.querySelector(".chat__icon-clip")
const dropDownMenu = document.querySelector(".chat__drop-down")

chatIcon.addEventListener("click", function () {
  chatIcon.style.display = "none";
  chatSearch.style.display = "block";
  botonBack.style.display = "block";
  ventanaChats.style.transform = "translateY(0)";
});

botonBack.addEventListener("click", function () {
  botonBack.style.display = "none";
  chatIcon.style.display = "block";
  chatSearch.style.display = "none";
  ventanaChats.setAttribute("style", "transform: translateY(-120vh)");
});

menu.addEventListener("click", function () {
  navbar.classList.toggle("navbar-open");
});

chatRecientes.forEach((chat) => {
  chat.addEventListener("click", function () {
    console.log("clikiti clak clakkkk ckaaaakasjdahjsd");
    chat.setAttribute("style", "font-weight: 400;");
    console.log(chat);
  });
});

dropDownButton.addEventListener("mouseover", function(){
  dropDownMenu.style.display = "block";
})
dropDownButton.addEventListener("mouseout", function(){
  dropDownMenu.style.display = "none";
})