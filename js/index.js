const menuHamburguer = document.querySelector(".burguer-menu");
const myNav = document.querySelector(".menu-sections");

menuHamburguer.addEventListener("click", () => {
    menuHamburguer.classList.toggle("active");
    myNav.classList.toggle("active");
})

document.querySelectorAll(".link-nav").forEach(n => n.addEventListener("click", () => {
    menuHamburguer.classList.remove("active");
    myNav.classList.remove("active");
}))