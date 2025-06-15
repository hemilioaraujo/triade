document.addEventListener("DOMContentLoaded", () => {
  const btnToggleMedia = document.getElementById("btn-toggle-media");
  btnToggleMedia.addEventListener("click", toggleMedia);
});

function toggleMedia() {
  if (this.textContent === "Vídeos") {
    this.textContent = "Videos";
    document.getElementById("photos-content").style.display = "none";
    document.getElementById("videos-content").style.display = "flex";
  } else {
    this.textContent = "Vídeos";
    document.getElementById("photos-content").style.display = "flex";
    document.getElementById("videos-content").style.display = "none";
  }
}