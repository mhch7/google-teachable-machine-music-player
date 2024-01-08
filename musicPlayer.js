const background = document.querySelector("#background");
const thumbnail = document.querySelector("#thumbnail");
const song = document.querySelector("#song");

const songArtist = document.querySelector(".song-artist");
const songTitle = document.querySelector(".song-title");
const progressBar = document.querySelector("#progress-bar");
let pPause = document.querySelector("#play-pause");

songIndex = 0;
songs = [
  "https://cdn.glitch.global/0e43efa3-f8ad-4286-8c4d-731da8b81ab9/Ride%20or%20Die.mp3?v=1683696345712",
  "https://cdn.glitch.global/0e43efa3-f8ad-4286-8c4d-731da8b81ab9/If%20Looks%20Can%20Kill.mp3?v=1683696344575",
  "https://cdn.glitch.global/0e43efa3-f8ad-4286-8c4d-731da8b81ab9/Blade%20Fury.mp3?v=1683696343735",
];
thumbnails = [
  "https://cdn.glitch.global/0e43efa3-f8ad-4286-8c4d-731da8b81ab9/1.jpeg?v=1683696342215",
  "https://cdn.glitch.global/0e43efa3-f8ad-4286-8c4d-731da8b81ab9/2.jpeg?v=1683696342527",
  "https://cdn.glitch.global/0e43efa3-f8ad-4286-8c4d-731da8b81ab9/3.jpeg?v=1683696342991",
];
songArtists = ["NCS", "NCS", "NCS"];
songTitles = ["Ride or Die", "If Looks Can Kill", "Blade Fury"];

let playing = true;
function playPause() {
  if (playing) {
    const song = document.querySelector("#song"),
      thumbnail = document.querySelector("#thumbnail");

    pPause.src =
      "https://cdn.glitch.global/0e43efa3-f8ad-4286-8c4d-731da8b81ab9/pause.png?v=1683696345034";

    song.play();
    playing = false;
  } else {
    pPause.src =
      "https://cdn.glitch.global/0e43efa3-f8ad-4286-8c4d-731da8b81ab9/play.png?v=1683696345367";

    song.pause();
    playing = true;
  }
}

song.addEventListener("ended", function () {
  nextSong();
});

function nextSong() {
  songIndex++;
  if (songIndex > 2) {
    songIndex = 0;
  }
  song.src = songs[songIndex];
  thumbnail.src = thumbnails[songIndex];
  background.src = thumbnails[songIndex];

  songArtist.innerHTML = songArtists[songIndex];
  songTitle.innerHTML = songTitles[songIndex];

  playing = true;
  playPause();
}

function previousSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = 2;
  }
  song.src = songs[songIndex];
  thumbnail.src = thumbnails[songIndex];
  background.src = thumbnails[songIndex];

  songArtist.innerHTML = songArtists[songIndex];
  songTitle.innerHTML = songTitles[songIndex];

  playing = true;
  playPause();
}

function updateProgressValue() {
  progressBar.max = song.duration;
  progressBar.value = song.currentTime;
  document.querySelector(".currentTime").innerHTML = formatTime(
    Math.floor(song.currentTime)
  );
  if (document.querySelector(".durationTime").innerHTML === "NaN:NaN") {
    document.querySelector(".durationTime").innerHTML = "0:00";
  } else {
    document.querySelector(".durationTime").innerHTML = formatTime(
      Math.floor(song.duration)
    );
  }
}

function formatTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds - min * 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  return `${min}:${sec}`;
}

setInterval(updateProgressValue, 500);

function changeProgressBar() {
  song.currentTime = progressBar.value;
}
