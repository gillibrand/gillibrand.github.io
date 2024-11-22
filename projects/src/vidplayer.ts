const players = document.querySelectorAll(".vidplayer");

function newImg(src) {
  const img = document.createElement("img");
  img.src = src;
  return img;
}

function setButton(button, text, img) {
  button.innerHTML = "";
  const span = document.createElement("span");
  span.textContent = text;
  span.appendChild(img);
  button.appendChild(span);
}

players.forEach((player) => {
  const video = player.querySelector(".vidplayer__video") as HTMLVideoElement;
  const button = player.querySelector(".vidplayer__button") as HTMLButtonElement;
  const overlay = player.querySelector<HTMLElement>(".vidplayer__overlay");

  function played() {
    if (overlay) overlay.style.display = "none";
    setButton(button, "Pause ", newImg("images/pause.svg"));
  }

  function paused() {
    setButton(button, "Play ", newImg("images/play.svg"));
  }

  function ended() {
    if (overlay) overlay.style.display = "";
    setButton(button, "Play ", newImg("images/play.svg"));
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
