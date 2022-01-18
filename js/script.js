let closer = document.querySelector("#closer");

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  closer.style.display = "block";
  console.log("djdshjk");
  navbar.classList.toggle("active");
};

closer.onclick = () => {
  navbar.classList.remove("active");
  cart.classList.remove("active");
  loginForm.classList.remove("active");
  closer.style.display = "none";
};

let cart = document.querySelector(".shopping-cart");
document.querySelector("#cart-btn").onclick = () => {
  closer.style.display = "block";
  console.log("djdshjk");
  cart.classList.toggle("active");
};
let loginForm = document.querySelector(".login-form");
document.querySelector("#login-btn").onclick = () => {
  closer.style.display = "block";
  console.log("djdshjk");
  loginForm.classList.toggle("active");
};

let searchForm = document.querySelector(".header .search-form");
document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
};
let slides = document.querySelectorAll(".home .slides-container .slide");
let index = 0;

function next() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

function prev() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}
