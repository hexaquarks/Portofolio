import chessPicture from '../../assets/chess_picture.jpg';
import Playlist from './Playlist';

const styles = require('../extras/Extras.module.scss');

const Extras = () => {
    return (
        <div className={styles.container}>
            <div className={styles.gridContainer}>
                <div>
                    <img src={chessPicture} className={styles.chessPicture} />
                </div>
                <div>
                    <p>I am a competitive chess player who began playing ~3 years ago. My favorite player is Mikhail Tal because of his flashy sacrifice tactical brilliances, I have a keen for tactics, and my opening repertoire consistes mainly of : Scotch, Philidor, Sicilian, Queen's Gambit, Karo-Kan, etc. </p>
                </div>
                {/* <div>
                    <span>asdassasadsadasd</span>
                </div> */}
            </div>
            {/* <div>
                <img src={chessPicture} className={styles.chessPicture} />
            </div> */}
        <Playlist />
        </div>
    );
}

export default Extras;