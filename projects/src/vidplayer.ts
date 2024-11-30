import playUrl from "/images/play.svg";
import pauseUrl from "/images/pause.svg";

const players = document.querySelectorAll(".vidplayer");

function newImg(src: string) {
  const img = document.createElement("img");
  img.src = src;
  return img;
}

function setButton(button: HTMLElement, text: string, img: HTMLImageElement) {
  button.innerHTML = "";
  button.textContent = text;
  button.appendChild(img);
}

players.forEach((player) => {
  const video = player.querySelector(".vidplayer__video") as HTMLVideoElement;
  const button = player.querySelector(".vidplayer__button") as HTMLButtonElement;
  const overlay = player.querySelector<HTMLElement>(".vidplayer__overlay");

  function played() {
    if (overlay) overlay.style.display = "none";
    setButton(button, "Pause ", newImg(pauseUrl));
  }

  function paused() {
    setButton(button, "Play ", newImg(playUrl));
  }

  function ended() {
    // if (overlay) overlay.style.display = "";
    setButton(button, "Play ", newImg(playUrl));
  }

  function togglePlay() {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  button.addEventListener("click", togglePlay);
  video.addEventListener("click", (e) => {
    e.preventDefault();
    togglePlay();
  });

  video.addEventListener("play", played);
  video.addEventListener("pause", paused);
  video.addEventListener("ended", ended);

  // Init button to right state with glyph
  paused();
});
