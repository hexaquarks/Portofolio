import ProgressBar from '@ramonak/react-progress-bar';
import chessPicture from '../../assets/chess_picture.jpg';
import chessIcon from '../../assets/chessIcon.png';
import lichessIcon from '../../assets/lichessIcon.png';
import Playlist from './Playlist';

const styles = require('../extras/Extras.module.scss');

const Extras = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={chessPicture} className={styles.chessPicture} />
            </div>
            <div className={styles.descriptionContainer}>
                <p>I am a competitive chess player who began playing ~3 years ago. My favorite player is Mikhail Tal because of his flashy sacrifice tactical brilliances, I have a keen for tactics, and my opening repertoire consistes mainly of : Scotch, Philidor, Sicilian, Queen's Gambit, Karo-Kan, etc. </p>
                <div className={styles.chessHandles}>
                    {/* <img src={chessIcon} height="40"/> 
                            <span>ELO ~ 1900</span>  */}
                    <table>
                        <thead>
                            <tr>
                                <th align="center"><a href="https://www.chess.com/member/physicskush" target="_blank"><img src={chessIcon} height="40" /></a></th>
                                <th align="center"><a href="https://lichess.org/@/physicskush" target="_blank"><img src={lichessIcon} height="40" /></a></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td align="center" >(ELO ~1900)</td>
                                <td align="center">(ELO ~2000)</td>
                            </tr>
                        </tbody>
                    </table>
                    {/* <span>
                            <img src={chessIcon} height="40"/> 
                            <img src={lichessIcon} width="40"/>
                        </span>
                        <span>
                            <h6>ELO ~1900</h6>
                        </span> */}
                </div>
            </div>
            {/* <div>
                <img src={chessPicture} className={styles.chessPicture} />
            </div> */}
            <div className={styles.playlistsContainer}>
                <Playlist />
            </div>
        </div>
    );
}

export default Extras;