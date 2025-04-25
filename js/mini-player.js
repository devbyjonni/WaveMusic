// =========================
// Mini Audio Player Controls
// =========================

document.addEventListener("DOMContentLoaded", function () {
  const miniAudio = document.getElementById("miniAudio");
  const playButton = document.getElementById("playButton");
  const pauseButton = document.getElementById("pauseButton");
  const stopButton = document.getElementById("stopButton");
  const miniProgress = document.getElementById("miniPlayerProgress");
  const currentTimeEl = document.getElementById("currentTime");
  const totalTimeEl = document.getElementById("totalTime");

  playButton.addEventListener("click", () => {
    miniAudio.play();
  });

  pauseButton.addEventListener("click", () => {
    miniAudio.pause();
  });

  stopButton.addEventListener("click", () => {
    miniAudio.pause();
    miniAudio.currentTime = 0;
  });

  miniAudio.addEventListener("loadedmetadata", () => {
    totalTimeEl.textContent = formatTime(miniAudio.duration);
  });

  miniAudio.addEventListener("timeupdate", () => {
    const percent = (miniAudio.currentTime / miniAudio.duration) * 100;
    miniProgress.style.width = percent + "%";
    currentTimeEl.textContent = formatTime(miniAudio.currentTime);
  });

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  }
});
