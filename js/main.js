document.addEventListener('DOMContentLoaded', () => alert("DOM ready!"));


/* TIME WIDGET */

var localTime = new Date();
document.getElementById('time').innerHTML = localTime.toLocaleTimeString();

/* 
AUDIUS API AUDIUS API AUDIUS API AUDIUS API AUDIUS API
AUDIUS API AUDIUS API AUDIUS API AUDIUS API AUDIUS API
AUDIUS API AUDIUS API AUDIUS API AUDIUS API AUDIUS API
AUDIUS API AUDIUS API AUDIUS API AUDIUS API AUDIUS API
*/

// AUDIO CONTROLS

//PLAY SONG


function play() { 
if (window.HTMLAudioElement) {
  try {
  var playerAudio = document.getElementById('music');
  
  var btn = document.getElementsByClassName('play');
  if (playerAudio.paused) {

    var c = document.getElementsByClassName('play')
    var b;
    for (b in c) {
      c[b].className = 'fa fa-pause'
    }
    playerAudio.play();
    document.getElementsByClassName("fa-play").className = "fa fa-pause";    
} 
  else {
    if (playerAudio.play) {
    var c = document.getElementsByTagName('i')
    var b;
    for (b in c) {
      c[b].className = 'fa fa-play'
    }
    playerAudio.paused();
    document.getElementsByClassName("fa-pause").className = "fa fa-play";    
    
alert('pause swapped')  
  }
}
  
}
catch (e) {
  // Fail silently but show in F12 developer tools console
  if(window.console && console.error("Error:" + e));
}
}
}

// PREVIOUS SONG
//Code is currently from previous rewind() function
//Delete these notes once its updated

var musicPlayer = document.getElementById("music"); 
function rewindAudio() {
  if(window.HTMLAudioElement){
    try {
      var mySong = document.getElementById('music')
      mySong.currentTime -= 30.0; 
    }
  catch(e) {
    // Fail silently but show in F12 developer tools console
    if(window.console&&console.error("Error:"+e));
  }
  }
}

//NEXT SONG
//Code is currently from previous fastForward() function
//Delete these notes once its updated


function fastForward() {
  if(window.HTMLAudioElement){
    try {
      var mySong = document.getElementById('music')
      mySong.currentTime += 30.0; 
    }
  catch(e) {
    // Fail silently but show in F12 developer tools console
    if(window.console&&console.error("Error:"+e));
  }
  }
}

//NEXT SONG

var request = new XMLHttpRequest()
const trackDisplay = document.getElementById('trackDisplay')
const audioSrc = document.getElementById('audioSrc')
const audio = document.getElementById('music')
const artwork = document.getElementById('cover-art')

async function f() {

// AUDIUS STUFF 

  // GET PLAYLIST TRACKS

  const getPlaylist = async () => {
    const response = await fetch('https://discoveryprovider2.audius.co/v1/playlists/LKpaY/tracks', {
      method: 'GET',
    });
    const { data } = await response.json();
    return data;
  }

  // GET TRACK ID FROM THE PLAYLIST
  const playList = await getPlaylist()
  // GRAB FIRST TRACK IN PLAYLIST
  const track = playList[0]
  // SET TRACK TITLE
  trackDisplay.textContent = track.title;
// SET TRACK ART
artwork.innerHTML = '<img src=https://creatornode2.audius.co/ipfs/Qmeqtb6tkBLP6QM5Zzf2PN7rjqAgg5TXvCZrQxstSo42Q1/1000x1000.jpg/>';

  // SET TRACK STREAM
  audioSrc.src = 'https://discoveryprovider2.audius.co/v1/tracks/${track.id}/stream';
  // PRELOAD
  audio.load();


  // Get the track from the playlist, then set it to 
  // Set this stream url as the source value in the audio tag
  // 'https://discoveryprovider2.audius.co/v1/tracks/m7VmA/stream'



  // End of function
}
f()


/* TWITCH API*/
/* TWITCH API*/
/* TWITCH API*/

//Create a Twitch.Embed object that 
//will render within the "twitch-embed" root element.


new Twitch.Embed("twitch-embed", {
  width: 854,
  height: 480,
  channel: "lecheflana",
  allowfullscreen: true,
  autoplay: true,
  layout: 'video-with-chat',
  video: '826825321'

});

embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
  var player = embed.getPlayer();
  player.play();
});