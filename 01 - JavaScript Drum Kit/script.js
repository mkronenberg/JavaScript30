function handleKeyDown(event) {

  // Get Container and Audio File
  const playingKey = document.querySelector(`div[data-key="${event.key}"]`);
  const audioFile = document.querySelector(`audio[data-key="${event.key}"]`);
  
  if (!audioFile) {return}; // End Function if not a valid key

  audioFile.currentTime = 0; //rewind to start
  audioFile.play(); // Play Audio

  // Link Animation on container
  playingKey.classList.add('playing');

  playingKey.addEventListener('transitionend', function {
    playingKey.classList.remove('playing');
  });

}

window.addEventListener('keydown', handleKeyDown);