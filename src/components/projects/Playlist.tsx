import { useEffect } from 'react';
const styles = require('../projects/Playlist.module.scss');

const SC = require('soundcloud');
SC.initialize({
  client_id: '1dff55bf515582dc759594dac5ba46e9'
});

const player = (trackId) => {
  SC.stream('/tracks/' + trackId).then(function(player){
    player.setVolume(0.0);
    console.log(player);
    player.play().then(function(){
      console.log('Playback started!');
    }).catch(function(e){
      console.error('Playback rejected. Try calling play() from a user interaction.', e);
    });
  });
}  
const Playlist = () => {
  return (
    <div>
      {/* Hello world { externalFunction() } */}
    </div>
  )
}


export default Playlist;