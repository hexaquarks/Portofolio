import coverPicture from '../../assets/profile_picture.png';
import TitleLetter from './TitleLetter';

const styles = require('../cover/Cover.module.scss');

const Cover = () => {
    const nameLetters = [
        'M', 'i', 'h','a', 'i', 'l', '&nbsp;', 
        'A', 'n', 'g', 'h', 'e', 'l', 'i', 'c', 'i'
    ]
    return (
        <div className={styles.container}>
            <span></span>
            <div className={styles.description} >
                <ul>
                    {nameLetters.map((value,index) => (
                        <TitleLetter name={value} index={index} />
                    ))}
                   
                </ul>
                <h2>
                    Prospecting software developper living in the Greater Montreal area. I am interested in most technologies across the back-end and front-end, and the respective practices associated with them. 
                </h2>
            </div>
            <img src={coverPicture} alt='cover_picture' />
        </div>
    );
}

export default Cover;