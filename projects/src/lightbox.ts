import { hideScrollbar, showScrollbar } from "./getScrollbarWidth";
import { isReduceMotion } from "./isReduceMotion";

const photos = document.querySelectorAll(".photo");

photos.forEach((photo) => {
  photo.addEventListener("click", () => {
    openLightbox(photo as HTMLImageElement);
  });
});

function htmlToDom(html: string) {
  const dummy = document.createElement("div");
  dummy.innerHTML = html;
  return dummy.firstElementChild as HTMLElement;
}

async function buildLightbox(photo: HTMLImageElement) {
  const figure = photo.closest("figure");
  const caption = figure?.querySelector("figcaption");

  const html = `
    <dialog class="lightbox">
      <img class="lightbox__photo photo" src="${photo.currentSrc}" >
      <p class="lightbox__text opacity-0">${caption?.textContent || ""}</p>
    </dialog>`;

  const lightbox = htmlToDom(html) as HTMLDialogElement;

  const newPhoto = lightbox.querySelector(".lightbox__photo")!;

  return new Promise<HTMLDialogElement>((resolve) => {
    newPhoto.addEventListener("load", () => {
      resolve(lightbox);
    });

    newPhoto.addEventListener("error", (error) => {
      throw new Error("img not loaded. Skipping " + photo.currentSrc);
    });
  });
}

async function openLightbox(photo: HTMLImageElement) {
  hideScrollbar();
  const lightbox = await buildLightbox(photo);

  const newPhoto = lightbox.querySelector(".lightbox__photo") as HTMLElement;
  const text = lightbox.querySelector(".lightbox__text")!;

  lightbox.addEventListener("click", (e) => {
    const el = e.target as HTMLElement;
    if (el.nodeName === "P") return;

    e.preventDefault();
    closeLightbox();
  });

  addOnSwipe(lightbox, closeLightbox);

  lightbox.addEventListener("cancel", (e) => {
    e.preventDefault();
    closeLightbox();
  });

  document.body.appendChild(lightbox);
  lightbox.showModal();

  // this delay is for Safari, which still has the dialog as display:none for one tick so will not
  // animate if added before then
  setTimeout(() => lightbox.classList.add("is-open"));

  photo.style.visibility = "hidden";

  // Animate in
  const rect = photo.getBoundingClientRect();
  const newRect = newPhoto.getBoundingClientRect();

  const scaleH = rect.height / newRect.height;
  const scaleW = rect.width / newRect.width;
  const diffY = rect.y - newRect.y;
  const diffX = rect.x - newRect.x;

  const animOptions = {
    easing: "ease",
    duration: 400,
  };

  const startTransform = `translateY(${diffY}px) translateX(${diffX}px) scale(${scaleW}, ${scaleH})`;
  const endTransform = `translate(0, 0) scale(1) `;

  let scaleAnim: Animation | undefined;

  if (!isReduceMotion()) {
    scaleAnim = newPhoto.animate(
      {
        transform: [startTransform, endTransform],
      },
      animOptions
    );
  }

  text.classList.remove("opacity-0");

  async function closeLightbox() {
    scaleAnim?.cancel();
    text.classList.add("opacity-0");

    newPhoto.style.borderWidth = `${10 / scaleH}px`;

    lightbox.classList.remove("is-open");

    if (!isReduceMotion()) {
      await newPhoto.animate(
        {
          transform: [endTransform, startTransform],
        },
        animOptions
      ).finished;
    }

    photo.style.visibility = "";

    lightbox.close();
    lightbox.parentElement?.removeChild(lightbox);
    showScrollbar();
  }
}

/**
 * Adds a touch listener to check if an element has been vertically swiped on. Used to close
 * lightbox on swipe.
 *
 * @param element Element to watch for swipes on.
 * @param callback Callback when swipe ends if past internal threshold.
 */
function addOnSwipe(element: HTMLElement, callback: () => void) {
  const swipeThreshold = 50;

  let startY = 0;
  let endY = 0;

  element.addEventListener("touchstart", (e) => {
    startY = e.touches[0].clientY;
    endY = startY;
  });

  element.addEventListener("touchmove", (e) => {
    endY = e.touches[0].clientY;
  });

  element.addEventListener("touchend", (e) => {
    const diff = endY - startY;

    if (Math.abs(diff) > swipeThreshold) {
      e.preventDefault();
      callback();
    }

    startY = 0;
    endY = 0;
  });
}
