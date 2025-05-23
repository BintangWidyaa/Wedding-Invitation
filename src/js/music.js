
  const image = document.getElementById("cover"),
    title = document.getElementById("music-title"),
    artist = document.getElementById("music-artist"),
    currentTimeEl = document.getElementById("current-time"),
    durationEl = document.getElementById("duration"),
    progress = document.getElementById("progress"),
    playerProgress = document.getElementById("player-progress"),
    prevBtn = document.getElementById("prev"),
    nextBtn = document.getElementById("next"),
    playBtn = document.getElementById("play"),
    boyButton = document.getElementById("boy-button"),
    girlButton = document.getElementById("girl-button");

  const music = new Audio();

  const songs = [
    {
      path: "assets/1.mp3",
      displayName: "You're Still The One",
      cover: "images/IMG_2997.JPG",
      artist: "Shania Twain",
    },
  ];

  let musicIndex = 0;
  let isPlaying = true;

  function togglePlay() {
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  }

  function playMusic() {
    isPlaying = true;
    // Change play button icon
    playBtn.classList.replace("fa-play", "fa-pause");
    // Set button hover title
    playBtn.setAttribute("title", "Pause");
    music.play();
  }

  function pauseMusic() {
    isPlaying = false;
    pauseBtn = document.getElementById("pause");

    // Change pause button icon
    playBtn.classList.replace("fa-pause", "fa-play");
    // Set button hover title
    playBtn.setAttribute("title", "Play");
    music.pause();
  }

  function loadMusic(song) {
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
  }

  function changeMusic(direction) {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
  }

  function updateProgressBar() {
    const { duration, currentTime } = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2, "0");
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(
      duration % 60
    )}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(
      currentTime % 60
    )}`;
  }

  function setProgressBar(e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
  }

  playBtn.addEventListener("click", togglePlay);
  boyButton.addEventListener("click", playMusic);
  girlButton.addEventListener("click", playMusic);
  prevBtn.addEventListener("click", () => changeMusic(-1));
  nextBtn.addEventListener("click", () => changeMusic(1));
  music.addEventListener("ended", () => changeMusic(1));
  music.addEventListener("timeupdate", updateProgressBar);
  playerProgress.addEventListener("click", setProgressBar);

  loadMusic(songs[musicIndex]);

  // document.addEventListener("DOMContentLoaded", () => {
  //   loadMusic(songs[musicIndex]);

  //   // Coba play otomatis
  //   music
  //     .play()
  //     .then(() => {
  //       isPlaying = true;
  //       playBtn.classList.replace("fa-play", "fa-pause");
  //       playBtn.setAttribute("title", "Pause");
  //     })
  //     .catch(() => {
  //       // Kalau gagal (karena autoplay diblokir), tampilkan tombol play
  //       isPlaying = false;
  //       playBtn.classList.replace("fa-pause", "fa-play");
  //       playBtn.setAttribute("title", "Play");
  //     });
  // });
