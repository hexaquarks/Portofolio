import { useState ,useEffect } from 'react';
import playIcon from '../../assets/play.png';
import pauseIcon from '../../assets/pause.png';
import prevIcon from '../../assets/prev.png';
import nextIcon from '../../assets/next.png';
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

      // console.log('Playback started!');

    }).catch(function(e){
      console.error('Playback rejected ', e);
    });
  });
}  
const Playlist = () => {
  const [playState, setPlayState ] = useState(false);

  const playClicked = () => {
    playState === true 
        ? setPlayState(false) 
        : setPlayState(true)
  }
  return (
    <div className={styles.container}>
      <div className={styles.picture} />
        <div className={styles.controls}> 
          <div className={styles.time}> 

          </div>
          <div className={styles.actions}> 
            <div className={styles.prev}> 
                <img src={prevIcon}/>
            </div>
            <div className={styles.playState}>
                <img src={playState===true 
                            ? playIcon 
                            : pauseIcon} 
                      alt="playStateIcon" />
            </div>
            <div className={styles.next}> 
          
            </div>
          
          </div>
        </div>  


      {/* Hello world { externalFunction() } */}
    </div>
  )
}


export default Playlist;