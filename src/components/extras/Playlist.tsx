import { useState, useEffect, useLayoutEffect } from 'react';
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

const imageLinks: any = [];

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

async function getImage(trackId) {
  let response = await SC.get('/tracks/' + trackId);
  return response;
}

const Playlist = () => {
  
  //first useState hook is to prevent on start 
  //useEffect with currMusic and playState dependency array
  const [skipCount, setSkipCount] = useState(true);
  const [currMusic, setCurrMusic] = useState<any>(null);
  const [playState, setPlayState] = useState<boolean>(false);
  const [playlistIndex, setPlaylistIndex ]  = useState(0);

  useEffect(() => {
      const fetchImages = async () => {
        let imageUrlString;
        for(var i = 0 ;i < playlist.length ;i++){
          imageUrlString = await getImage(playlist[i]);
          imageLinks.push (
            imageUrlString.artwork_url
          )
        }
      }
      fetchImages();
  }, []);

  useEffect(() => {
    const setMusicFetch = async () => {
      const music = await getJson(playlist[playlistIndex]);
      music.setVolume(0.1);
      setCurrMusic(music);
    }
    setMusicFetch();
  }, [playlistIndex]);


  useEffect(() => {
    if(skipCount) setSkipCount(false);
    if(!skipCount) {
      const playMusicFetch = async () => {
        playState ? await currMusic.play() : await currMusic.pause();
      }
      playMusicFetch();
    }
  }, [currMusic, playState]);

  const enableMusic = async () => {
      if(currMusic){
        setPlayState(!playState);
      }
  }

  const changeMusic = async (direction) => {
    
    setPlaylistIndex(
      direction === 'next' 
        ? playlistIndex < playlist.length-1 
          ? playlistIndex + 1  
          : playlistIndex
        : playlistIndex > 0 
          ? playlistIndex - 1
          : playlistIndex
    )
  }

  const handleClick = async (buttonType) => {
    buttonType === 'play' 
      ? enableMusic()
      : changeMusic(buttonType);
  }

  return (
    <div className={styles.container}>
      <div className={styles.picture} >
        <img src={imageLinks[playlistIndex]} width="100" height="100" />
      </div>
      <div className={styles.controls}>
        <div className={styles.time}>

        </div>
        <div className={styles.actions}>
          <div className={styles.prev}
               onClick={() => { handleClick('prev') }}>
            <img src={prevIcon} width="50" height="50" />
          </div>
          <div className={styles.playState}
               onClick={() => { handleClick('play') }}>
            <img src={playState === false
              ? playIcon
              : pauseIcon}
              alt="playStateIcon" width="50" height="50" 
              style={{alignSelf: `center`}}/>
          </div>
          <div className={styles.next}
               onClick={() => { handleClick('next') }}>
            <img src={nextIcon} width="50" height="50" />
          </div>

        </div>
      </div>


      {/* Hello world { externalFunction() } */}
    </div>
  )
}


export default Playlist;