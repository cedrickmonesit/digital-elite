function onClickHamburgerActive() {
  let hamburger = document.querySelector(".hamburger");
  hamburger.classList.toggle("is-active");

  if (hamburger.classList.contains("is-active")) {
    let nav = document.querySelector(".mobile-nav");
    nav.style.display = "block";
  } else {
    let nav = document.querySelector(".mobile-nav");
    nav.style.display = "none";
  }
}
