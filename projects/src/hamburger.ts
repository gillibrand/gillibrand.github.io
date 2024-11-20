const hamburger = document.getElementById("hamburger")!;

function toggleMenu() {
  document.body.classList.toggle("nav-open");
}

function closeMenu() {
  document.body.classList.remove("nav-open");
}

hamburger.addEventListener("click", toggleMenu);
hamburger.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMenu();
  }
});
