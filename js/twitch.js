/* TWITCH API*/
/* TWITCH API*/
/* TWITCH API*/

//Create a Twitch.Embed object that 
//will render within the "twitch-embed" root element.


const options = {
  width: 854,
  height: 480,
  channel: "lecheflana"
  // you ned to add a video id or a collection id i think
  // https://dev.twitch.tv/docs/embed/video-and-clips#interactive-frames-for-live-streams-and-vods
}

const embed = new Twitch.Player("twitch-embed", options);

embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
  console.log('The video is ready');
  const player = embed.getPlayer();
  player.play();
});