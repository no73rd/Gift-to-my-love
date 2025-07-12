const audio = document.getElementById('bg-audio');
const btn = document.getElementById('toggle-audio');

btn.onclick = () => {
  if (audio.paused) {
    audio.play();
    btn.textContent = '🔇 كتم الصوت';
  } else {
    audio.pause();
    btn.textContent = '🔊 شغّل الصوت';
  }
};
