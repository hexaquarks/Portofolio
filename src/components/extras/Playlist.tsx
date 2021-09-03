import { useState, useEffect, useReducer } from 'react';
import playIcon from '../../assets/play.png';
import pauseIcon from '../../assets/pause.png';
import prevIcon from '../../assets/prev.png';
import nextIcon from '../../assets/next.png';
const styles = require('../extras/Playlist.module.scss');

const playlist = [
  913128502,
  755552476,
  604329399
];

const SC = require('soundcloud');
SC.initialize({
  client_id: '1dff55bf515582dc759594dac5ba46e9'
});


// const musicFetch = (trackId) => {
//   return SC.stream('/tracks/' + trackId)
//     .then(track => {
//       return track;
//     })
// }

async function getJson(trackId) {
  let response = await SC.stream('/tracks/' + trackId);
  return response;
}

const Playlist = () => {

  const [currMusic, setCurrMusic] = useState<any>(null);
  const [playState, setPlayState] = useState<boolean>(false);
  const [playlistIndex, setPlaylistIndex ]  = useState(0);
  const forceUpdate = useReducer(() => ({}), {})[1] as () => void

  useEffect(() => {
    getJson(playlist[playlistIndex]).then((track) => {
      track.setVolume(0.4);
      console.log(track);
      setCurrMusic(track);
    });
  }, [playState])

  // useEffect(() => {
  //   getJson(playlist[playlistIndex]).then((track) => {
  //     track.setVolume(0.4);
  //     console.log(track);
  //     setCurrMusic(track);
  //   });
  // }, [])


  const enableMusic = async () => {
      if(currMusic){
        setPlayState(!playState);
        playState ? await currMusic.pause() 
                  : await currMusic.play();
      }
  }

  const changeMusic = async (direction) => {
    setPlaylistIndex(
      direction === 'next' ? await playlistIndex+1 : await playlistIndex-1
    )
    console.log(playlistIndex);
  }

  const handlePlayClicked = async (buttonType) => {
    if (buttonType === 'play') {
      enableMusic();
    } else if (buttonType === 'prev') {
      changeMusic('prev')
    } else if (buttonType === 'next') {
      changeMusic('next');
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.picture} />
      <div className={styles.controls}>
        <div className={styles.time}>

        </div>
        <div className={styles.actions}>
          <div className={styles.prev}
               onClick={() => { handlePlayClicked('prev') }}>
            <img src={prevIcon} width="50" height="50" />
          </div>
          <div className={styles.playState}
               onClick={() => { handlePlayClicked('play') }}>
            <img src={playState === false
              ? playIcon
              : pauseIcon}
              alt="playStateIcon" width="50" height="50" 
              style={{alignSelf: `center`}}/>
          </div>
          <div className={styles.next}
               onClick={() => { handlePlayClicked('next') }}>
            <img src={nextIcon} width="50" height="50" />
          </div>

        </div>
      </div>


      {/* Hello world { externalFunction() } */}
    </div>
  )
}


export default Playlist;