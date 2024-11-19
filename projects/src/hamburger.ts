const hamburger = document.getElementById("hamburger")!;

function toggleMenu() {
  document.body.classList.toggle("nav-open");
}

hamburger.addEventListener("click", toggleMenu);
