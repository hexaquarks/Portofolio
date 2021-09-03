import { useState, useEffect } from 'react';
import playIcon from '../../assets/play.png';
import pauseIcon from '../../assets/pause.png';
import prevIcon from '../../assets/prev.png';
import nextIcon from '../../assets/next.png';
import { resolve } from 'q';
import { functionTypeParam } from '@babel/types';
const styles = require('../extras/Playlist.module.scss');


// const SC = require('soundcloud');
// SC.initialize({
//   client_id: '1dff55bf515582dc759594dac5ba46e9'
// });


// const musicFetch = (trackId) => {
//   return SC.stream('/tracks/' + trackId)
//     .then(track => {
//       return track;
//     })
// }

// async function getJson(trackId) {
//   let response = await SC.stream('/tracks/' + trackId);
//   return response;
// }

const Playlist = () => {
  // console.log(musicFetch(913128502));
  // let jsonData;
  // musicFetch(913128502).then((data) => {
  //   jsonData = data;
  // });
  // console.log(jsonData);
  // jsonData.play();
  // jsonData.setVolume(0.01);

  const [currMusic, setCurrMusic] = useState();
  const [playState, setPlayState] = useState(false);
  // const [data, updateData] = useState();
  // useEffect(() => {
  //   const getData = async () => {
  //     const resp = await getJson(913128502);
  //     updateData(resp);
  //   }
  //   getData();
  // }, []);

  const enableMusic = () => {

    // if(playState) {

    // }
    //   ? setPlayState(false) 
    //   : setPlayState(true)
  }

  const handlePlayClicked = (buttonType) => {
    if (buttonType === 'play') {
      enableMusic();
    } else if (buttonType === 'prev') {
      // translate left
    } else if (buttonType === 'next') {
      // translate right
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