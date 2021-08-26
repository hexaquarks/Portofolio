import styles from '../cover/Cover.module.css';
import coverPicture from '../../assets/profile_picture.png';

const Cover = () => {
    return (
        <div className={styles.container} >
            <div className={styles.description} >
                <h1>
                    Mihail Anghelici
                </h1> 
                <h2>
                    Prospecting software developper living in the Greater Montreal area. I am interested in most technologies across the back-end and front-end, and the respective practices associated with them. 
                </h2>
            </div>
            <img src={coverPicture} alt='cover_picture' />
            {/* <div className={styles.picture}>
                <img src={coverPicture} 
            </div> */}
        </div>
    );
}

export default Cover;