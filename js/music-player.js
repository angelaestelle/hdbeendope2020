document.addEventListener('DOMContentLoaded', () => alert("DOM ready!"));

const request = new XMLHttpRequest()

const musicPlayer = document.getElementById("music");
const trackDisplay = document.getElementById('trackDisplay')
const audioSrc = document.getElementById('audioSrc')
const audio = document.getElementById('music')
const artwork = document.getElementById('cover-art')

const nextButton = document.getElementById('next')
const previousButton = document.getElementById('previous')
const ppButton = document.getElementById('playpause')
const stopButton = document.getElementById('stop')

const playlistContent = document.getElementById('playlist')

let playList = [];
let index = 0;

/* 
AUDIUS API AUDIUS API AUDIUS API AUDIUS API AUDIUS API
AUDIUS API AUDIUS API AUDIUS API AUDIUS API AUDIUS API
AUDIUS API AUDIUS API AUDIUS API AUDIUS API AUDIUS API
AUDIUS API AUDIUS API AUDIUS API AUDIUS API AUDIUS API
*/

// AUDIO CONTROLS
const onNextButton = (evt) => {
  try {
    if (index === playList.length - 1) {
      return;
    };
    ++index;
    audio.pause()
    setAudioTrack(playList[index]);
  } catch (e) {
    console.error(e)
  }

}

const onPreviousButton = (evt) => {
  try {
    if (index === 0) {
      return;
    }
    audio.pause()
    setAudioTrack(playList[--index])
  } catch (e) {
    console.error(e)
  }
}

const onPPButton = (evt) => {
  try {
    const playButton = ppButton.getElementsByClassName('fa fa-play')[0]
    const pauseButton = ppButton.getElementsByClassName('fa fa-pause')[0]
    //switch between pause and start button
    if (playButton) {
      audio.play()
      playButton.className = 'fa fa-pause'
    }
    if (pauseButton) {
      audio.pause()
      pauseButton.className = 'fa fa-play'
    }
  } catch (e) {
    console.error(e)
  }
}

const onStopButton = (evt) => {
  const pauseButton = ppButton.getElementsByClassName('fa fa-pause')[0]
  try {
    audio.pause();
    audio.currentTime = 0;
    pauseButton.className = 'fa fa-play'
  } catch (e) {
    console.error(e)
  }
}

const setAudioTrack = (trackInfo) => {
  const track = trackInfo;
  audio.pause();
  audio.currentTime = 0;
  trackDisplay.textContent = track.title;
  // SET TRACK ART
  artwork.innerHTML = `<img src=${track.artwork['1000x1000']}/>`;
  audioSrc.src = `https://discoveryprovider2.audius.co/v1/tracks/${track.id}/stream`;
  audio.load();
  audio.play()
  playButton.className = 'fa fa-pause'
}

const setPlayList = (playlist) => {
  playList.forEach((track) => {
    const trackNode = document.createElement('div')
    trackNode.append(`${track.title} - ${track.user.name}`)
    trackNode.addEventListener('click', onPlayListTrackClick(track))
    playlistContent.appendChild(trackNode)
  })
}

const onPlayListTrackClick = (track) => (_) => {
  setAudioTrack(track)
}

async function init() {
  const getPlaylist = async () => {
    const response = await fetch('https://discoveryprovider2.audius.co/v1/playlists/LKpaY/tracks', {
      method: 'GET',
    });
    const { data } = await response.json();
    return data;
  }
  playList = await getPlaylist()
  setPlayList(playList)
  setAudioTrack(playList[0])
}


nextButton.addEventListener('click', onNextButton)
previousButton.addEventListener('click', onPreviousButton)
ppButton.addEventListener('click', onPPButton)
stopButton.addEventListener('click', onStopButton)


init();