import styles from '../about/About.module.css';
import mcgillIcon from '../../assets/mcgill_icon.png';
import bdebIcon from '../../assets/bdeb_icon.png';

const About = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.leftParagraph}>
                <h2>
                    Work
                </h2>
                <hr />
                <p>
                Pariatur laborum enim velit incididunt magna adipisicing adipisicing aute ut. Officia aliquip sint duis occaecat commodo aliquip. Irure laborum dolore ex excepteur fugiat aliqua et fugiat cupidatat id qui. Ad aute labore voluptate voluptate minim nostrud officia irure consectetur velit quis laborum.
                </p>
            </div> 
            <div className={styles.middleParagraph}>
                <h2>
                    Personal
                </h2> 
                <hr />              
                <p>
                Pariatur laborum enim velit incididunt magna adipisicing adipisicing aute ut. Officia aliquip sint duis occaecat commodo aliquip. Irure laborum dolore ex excepteur fugiat aliqua et fugiat cupidatat id qui. Ad aute labore voluptate voluptate minim nostrud officia irure consectetur velit quis laborum.

                </p>
            </div> 
            <div className={styles.rightParagraph}>
                <h2>
                    Education
                </h2> 
                <hr />              
                <p>
                    <div> 
                        <img src={mcgillIcon} width="50" height="50" alt="mcgillIcon" />
                    </div>
                    <div>
                        McGill University -- BSc Physics <i>(Honours)</i> <i>[2019-2021]</i>
                    </div>
                    <div> 
                        <img src={mcgillIcon} width="50" height="50" alt="mcgillIcon" />
                    </div>
                    <div>
                        McGill University -- BSc Physics &#38; Computer Science <i>[2021-current]</i>
                    </div>
                    <div> 
                        <img src={bdebIcon} width="40" height="40" style={{marginLeft: `5px`}} alt="bdebIcon" />
                    </div>
                    <div>
                        Cegep Bois-de-Boulogne -- Computer Science &#38; Mathematics <i>[2015-2019]</i>
                    </div>
                </p>
            </div> 
        </div>
    );
}

export default About;