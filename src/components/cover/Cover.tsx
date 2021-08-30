import coverPicture from '../../assets/profile_picture.png';

const styles = require('../cover/Cover.module.scss');

const Cover = () => {
    return (
        <div className={styles.container}>
            <span></span>
            <div className={styles.description} >
                <ul>
                    <li>M</li>
                    <li>i</li>
                    <li>h</li>
                    <li>a</li>
                    <li>i</li>
                    <li>l</li>
                    <li>&nbsp;</li>
                    <li>A</li>
                    <li>n</li>
                    <li>g</li>
                    <li>h</li>
                    <li>e</li>
                    <li>l</li>
                    <li>i</li>
                    <li>c</li>
                    <li>i</li>
                </ul>
                {/* <h1>
                    Mihail Anghelici
                </h1>  */}
                <h2>
                    Prospecting software developper living in the Greater Montreal area. I am interested in most technologies across the back-end and front-end, and the respective practices associated with them. 
                </h2>
            </div>
            <img src={coverPicture} alt='cover_picture' />
        </div>
    );
}

export default Cover;