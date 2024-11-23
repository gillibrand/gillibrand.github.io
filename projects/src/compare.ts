const toggles = document.querySelectorAll<HTMLInputElement>(".toggle__checkbox");
console.info(">>> try");

toggles.forEach((toggle) => {
  const compareId = toggle.dataset["compare"];
  if (!compareId) return;

  const compare = document.getElementById(compareId);
  if (!compare) return;

  function update() {
    compare!.classList.toggle("compare--checked", toggle.checked);
  }

  // Update to match initially
  update();

  toggle.addEventListener("click", update);

  function changeToggle() {
    toggle.checked = !toggle.checked;
    update();
  }

  compare.addEventListener("click", changeToggle);
});
