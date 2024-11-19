const players = document.querySelectorAll(".player");

players.forEach((player) => {
  const video = player.querySelector(".player__video") as HTMLVideoElement;
  const button = player.querySelector(".player__button") as HTMLButtonElement;
  const overlay = player.querySelector<HTMLElement>(".player__overlay");

  function played() {
    if (overlay) overlay.style.display = "none";
    button.textContent = "Pause ⏸";
  }

  function paused() {
    button.textContent = "Play ⏵";
  }

  function ended() {
    if (overlay) overlay.style.display = "";
    button.textContent = "Replay ⏮";
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
