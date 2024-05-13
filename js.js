const mobile_nav = document.querySelector(".mobile_navbar-btn");
const nav_header = document.querySelector(".header__box");
const togggleNavbar = () => {
  nav_header.classList.toggle("active");
};
mobile_nav.addEventListener(".click", () => togggleNavbar());
