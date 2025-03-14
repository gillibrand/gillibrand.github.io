import { CourseClear } from "course-clear";

function get<T>(id: string) {
  return document.getElementById(id) as T;
}

let sharedDialog: CourseClear | undefined;

function getCourseClear() {
  if (sharedDialog) return sharedDialog;

  sharedDialog = new CourseClear();
  sharedDialog.closeOnEscape = true;
  sharedDialog.closeOnOutside = true;

  const content = (document.getElementById("cc-details-template") as HTMLTemplateElement).content.cloneNode(
    true
  ) as HTMLDivElement;

  const closeButton = content.querySelector("#cc-close-button") as HTMLButtonElement;
  closeButton.addEventListener("click", () => {
    sharedDialog!.open = false;
  });

  const replayButton = content.querySelector("#cc-replay-button") as HTMLButtonElement;
  replayButton.addEventListener("click", () => {
    sharedDialog!.open = false;
    setTimeout(() => (sharedDialog!.open = true), 300);
  });

  sharedDialog.appendChild(content);
  document.body.appendChild(sharedDialog);

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
  // button.focus();
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
