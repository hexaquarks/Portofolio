import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import playIcon from '../../../assets/play.png';
import pauseIcon from '../../../assets/pause.png';
import prevIcon from '../../../assets/prev.png';
import nextIcon from '../../../assets/next.png';
import soundcloudLogo from '../../../assets/soundcloudLogo.png';
import ProgressBar from "@ramonak/react-progress-bar";
// import ProgressBar from './ProgressBarWrapper';
const styles = require('./Playlist.module.scss');

const trackIds = [
  558781332, //saviour
  641232672, //inifnity
  405177912, //we can be free
  789251809, //lost in us
  911387248, //red sea
  604329399, //empty echo
  674440619, //risk it all 
  577195731, //leaving u 
  588337998, //love is wide awake 
  291839508, //reaching for my dreams
  754912147 //uplifted 
];

let playlist: any = [];

const SC = require('soundcloud');
SC.initialize({
  client_id: '1dff55bf515582dc759594dac5ba46e9'
});

async function getJson(trackId) {
  let response = await SC.stream('/tracks/' + trackId);
  return response;
}

async function getInfo(trackId) {
  let response = await SC.get('/tracks/' + trackId);
  return response;
}

const Playlist = () => {

  //first useState hook is to prevent on start 
  //useEffect with currMusic and playState dependency array
  const [skipCount, setSkipCount] = useState(0);
  const [currMusic, setCurrMusic] = useState<any>(null);
  const [playState, setPlayState] = useState<boolean>(false);
  const [playlistIndex, setPlaylistIndex] = useState(0);

  //time progress
  const [realTime, setRealTime] = useState(false);
  const [timeCompleted, setTimeCompleted] = useState(0);

  const countRef = useRef(timeCompleted);
  countRef.current = timeCompleted;

  useEffect(() => {
    let interval;
    if (realTime) {
      interval = setInterval(() => {
        let trackDurationTime = playlist[playlistIndex].duration;
        setTimeCompleted(currCount => currCount + 100000/trackDurationTime);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [realTime]);

  const manageRealTime = () => {
    setRealTime(!realTime);
  }

  const reset = () => {
    setTimeCompleted(0);
  }

  useEffect(() => {
    const fetchImages = async () => {
      let response;
      for (var i = 0; i < trackIds.length; i++) {
        response = await getInfo(trackIds[i]);

        playlist.push({
          trackId: trackIds[i],
          image: response.artwork_url,
          name: response.title,
          duration: response.duration
        });
      }
    }
    fetchImages();
  }, []);

  useEffect(() => {
    const setMusicFetch = async () => {
      const music = await getJson(trackIds[playlistIndex]);
      music.setVolume(0.1);
      setCurrMusic(music);
    }
    setMusicFetch();
  }, [playlistIndex]);


  useEffect(() => {
    if (skipCount < 2) setSkipCount(skipCount + 1);

    // skipCount < 2 && setSkipCount(skipCount + 1);
    if (skipCount >= 2) {
      const playMusicFetch = async () => {
        try {
          playState ? await currMusic.play() : await currMusic.pause();
        } catch (e) {
          
        }
      }
      playMusicFetch();
    }
  }, [currMusic, playState]);

  const enableMusic = async () => {
    if (currMusic) {
      setPlayState(!playState);
      manageRealTime();
    }
  }

  const changeMusic = async (direction) => {

    setPlaylistIndex(
      direction === 'next'
        ? playlistIndex < playlist.length - 1
          ? playlistIndex + 1
          : playlistIndex
        : playlistIndex > 0
          ? playlistIndex - 1
          : playlistIndex
    )
    reset();
  }

  const handleClick = async (buttonType) => {
    buttonType === 'play'
      ? await enableMusic()
      : await changeMusic(buttonType);
  }

  return (
    <div className={styles.container}>
      <h2>
        Music 
        <a href="https://soundcloud.com/mihail-anghelici/sets/uplifting-trance" 
            target="_blank">
              <img src={soundcloudLogo} 
             width="75"
            style={{marginLeft : '10px'}}/>
        </a>
      </h2> 
      <hr />
      <div className={styles.picture} >
        {
          typeof playlist[playlistIndex] !== 'undefined'
            ? <img src={playlist[playlistIndex].image} 
                   width="100" 
                   height="100"
              />
            : <p>Loading</p>
        }
      </div>
      <div className={styles.controls}>
        {
          typeof playlist[playlistIndex] !== 'undefined'
            ? <p>{playlist[playlistIndex].name}</p>
            : <p>Loading</p>
        }
        <div className={styles.actions}>
          <div className={styles.prev}
               onClick={() => { 
                 handleClick('prev')
               }}
          >
            <img src={prevIcon} width="35" height="35" />
          </div>
          <div className={styles.playState}
            onClick={() => { 
              handleClick('play') 
              }}
          >
            <img src={playState === false
                          ? playIcon
                          : pauseIcon}
                alt="playStateIcon" 
                width="50" 
                height="50"
                style={{ alignSelf: `center` }} />
          </div>
          <div className={styles.next}
            onClick={() => {
               handleClick('next') 
               }}
          >
            <img src={nextIcon}
                 width="35" 
                 height="35" 
            />
          </div>

        </div>
        <div className={styles.time}>
          <ProgressBar completed={timeCompleted} 
                       bgColor="#0096FF"
                       height="8px" 
                       baseBgColor="skyblue"
                       labelAlignment="center"
                       labelColor="aliceblue"
                       isLabelVisible={false}
         />
        </div>
      </div>
    </div>
  )
}


export default Playlist;