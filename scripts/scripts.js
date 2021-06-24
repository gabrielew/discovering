const volumeImage = document.getElementById("image");
const audio = new Audio("/assets/frog.mp3");
async function playAudio() {
  volumeImage.src = "/assets/play-volume.svg";
  audio.play();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  volumeImage.src = "/assets/volume.svg";
}
