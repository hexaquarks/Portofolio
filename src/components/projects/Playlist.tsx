import { useEffect } from 'react';
var SC = require('soundcloud');

// const useScript = url => {
//     useEffect(() => {
//         const script = document.createElement('script');

//         script.src = url;
//         script.async = true;

//         document.body.appendChild(script);
//         window.sc

//         return () => {
//             document.body.removeChild(script);
//         }
//     }, [url]);
// };

const Playlist = () => {
  
  // SC.initialize({
  //   client_id: 'APKAI6TU7MMXM5DG6EPQ'
  // });
  // /*.header("Access-Control-Allow-Origin", "*") */
  // SC.get('/user/181/tracks').then(function(tracks){
  //   alert('Latest track: ' + tracks[0].title);
  // });

  fetch('https://api.soundcloud.com', {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    }
  })
    .then(results => results.json())
    .then(info => {
      console.log(info);
    })

  // stream track id 293
  //   SC.stream('/tracks/293').then(function(player){
  //     player.play().then(function(){
  //       console.log('Playback started!');
  //     }).catch(function(e){
  //       console.error('Playback rejected. Try calling play() from a user interaction.', e);
  //     });
  //   });
  // useScript('https://connect.soundcloud.com/sdk/sdk-3.3.2.js');

  return (
    <div>
      {/* Hello world { externalFunction() } */}
    </div>
  )
}

export default Playlist;