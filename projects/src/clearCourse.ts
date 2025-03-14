// ensure this is imported in whole for the side-effect of defining the component
import "course-clear";
import { CourseClear } from "course-clear";

function get<T>(id: string) {
  return document.getElementById(id) as T;
}

let sharedDialog: CourseClear | undefined;

function getCourseClear() {
  if (sharedDialog) return sharedDialog;
  sharedDialog = document.getElementById("cc-dialog") as CourseClear;
  sharedDialog.style.display = "";

  const closeButton = sharedDialog.querySelector("#cc-close-button") as HTMLButtonElement;
  closeButton.addEventListener("click", () => {
    sharedDialog!.open = false;
  });

  const replayButton = sharedDialog.querySelector("#cc-replay-button") as HTMLButtonElement;
  replayButton.addEventListener("click", () => {
    sharedDialog!.open = false;
    setTimeout(() => (sharedDialog!.open = true), 300);
  });

  return sharedDialog;
}

function showDialog(greeting: string) {
  const dialog = getCourseClear();
  dialog.greeting = greeting;

  const colorRadio = document.querySelector(".color-radio > input:checked") as HTMLInputElement;
  const bgColor = colorRadio.value;
  dialog.style.setProperty("--cc-custom-bg-color", `var(${bgColor})`);

  // The default is fine, except for on yellow, which is too light and needs a custom color
  const color = colorRadio.dataset.color;
  if (color) {
    dialog.style.setProperty("--cc-custom-color", color);
  } else {
    dialog.style.removeProperty("--cc-custom-color");
  }

  dialog.open = true;
}

function initForm() {
  const form = get<HTMLFormElement>("cc-form");

  const greetingEl = get<HTMLInputElement>("cc-greeting");

  const params = new URLSearchParams(location.search.slice(1));
  const customGreeting = params.get("hi");

  if (customGreeting) {
    greetingEl.value = customGreeting;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const greeting = greetingEl.value;
    showDialog(greeting);
  });
}

initForm();
