document.getElementById('year').textContent = new Date().getFullYear();

    const tracks = document.querySelectorAll('.track');
    const audioPlayer = document.getElementById('audio-player');

    tracks.forEach(track => {
        const playButton = track.querySelector('.play-button');

        playButton.addEventListener('click', () => {
            const audioSrc = track.getAttribute('data-audio-src');
            audioPlayer.src = audioSrc;
            audioPlayer.play();
            // Optional: Update active track styles
            tracks.forEach(t => t.classList.remove('active'));
            track.classList.add('active');
        });
    });

    // Show the audio player controls when a track is played
    audioPlayer.addEventListener('play', () => {
        audioPlayer.style.display = 'block';
    });
