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
                    I am currently a full-time student majoring in Physics and Computer Science after doing 2 years of Honours Physics. I practice coding daily and have experience with: Java, JavaFX, Python, Javascript, HTML5, CSS and ReactJS.
                </p>
            </div> 
            <div className={styles.middleParagraph}>
                <h2>
                    Personal
                </h2> 
                <hr />              
                <p>
                    I am passionate developper with a strong interest in the natural sciences (physics, natural philosophy) ,and mathematics. In my free time I like to play chess, dabble with LaTeX, watch Netflix, and take baths. 
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
                    <div style={{marginTop: `6px`}}>
                        <b>McGill University</b> &#8213; <span>Major Physics and Computer Science</span> <i>[2021-current]</i>
                    </div>
                    <div> 
                        <img src={mcgillIcon} width="50" height="50" alt="mcgillIcon" />
                    </div>
                    <div style={{marginTop: `6px`}}>
                        <b>McGill University</b> &#8213; <span>Honours Physics</span> <i>[2019-2021]</i>
                    </div>
                    <div> 
                        <img src={bdebIcon} width="40" height="40" style={{marginLeft: `5px`}} alt="bdebIcon" />
                    </div>
                    <div style={{marginTop: `6px`}}>
                        <b>Cegep Bois-de-Boulogne</b> &#8213; <span>Computer Science and Mathematics</span> <i>[2015-2019]</i>
                    </div>
                </p>
            </div> 
        </div>
    );
}

export default About;