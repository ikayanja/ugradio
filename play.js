document.addEventListener('DOMContentLoaded', function() {
    const stations = {
      station1: 'https://streaming-url-for-ugandan-station-1',
      station2: 'https://streaming-url-for-ugandan-station-2'
      // Add more stations as needed
    };
  
    let currentAudio = null;
  
    document.querySelectorAll('.play-btn').forEach(button => {
      button.addEventListener('click', function() {
        const stationId = this.id;
        if (currentAudio) {
          currentAudio.pause();
          currentAudio = null;
        }
  
        if (!currentAudio) {
          currentAudio = new Audio(stations[stationId]);
          currentAudio.play();
          this.innerHTML = '<i class="fas fa-pause"></i> Pause';
        } else {
          currentAudio.pause();
          this.innerHTML = '<i class="fas fa-play"></i> Play';
        }
      });
    });
  });
  
