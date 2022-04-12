function playSound(e) {
  const element =
    document.querySelector(`div[data-key="${e.keyCode}"]`) ||
    e.target.closest(".key");
  if (!element) return;

  const audio = document.querySelector(
    `audio[data-key="${element.dataset.key}"]`
  );

  element.classList.add("playing");
  audio.currentTime = 0; // reset audio
  audio.play();

  // fix bug when press key for a long time, the class: playing can't be remove
  audio.onended = () => {
    if (element.classList.contains("playing"))
      element.classList.remove("playing");
  };
}

window.addEventListener("keydown", playSound);
window.addEventListener("click", playSound);
window.addEventListener("transitionend", (e) => {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
});
