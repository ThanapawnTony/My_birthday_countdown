const audio = document.getElementById("audio");
const playButton = document.getElementById("play-btn");
const pauseButton = document.getElementById("pause-btn");
const stopButton = document.getElementById("stop-btn");
const volumeControl = document.getElementById("volume");

playButton.addEventListener("click", () => {
    audio.play();
});

pauseButton.addEventListener("click", () => {
    audio.pause();
});

stopButton.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
});

volumeControl.addEventListener("input", () => {
    audio.volume = volumeControl.value / 100;
});