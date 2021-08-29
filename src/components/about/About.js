import styles from '../about/About.module.css';
import mcgillIcon from '../../assets/mcgill_icon.png';
import bdebIcon from '../../assets/bdeb_icon.png';
import downArrow from '../../assets/down_arrow.png';
import { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import Fade from '@material-ui/core/Fade';

const About = () => {
    const [topDropDown, setTopDropDown] = useState(false);

    const onClick = (type) => {
        if(type==='top'){
            setTopDropDown(!topDropDown);
        }
    }
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
                    <div className={styles.dropDownArrow}>
                        <img className={topDropDown===true ? `${styles.dropArrowTop} ${styles.doRotate}` : `${styles.dropArrowTop}`} 
                            src={downArrow} width="30" height="30" 
                            onClick={() => { onClick('top') }}
                            // styles={{Animation: `rotate 1s`}}
                            >
                        </img>
                        {topDropDown &&  <Fade in={true}><div className={styles.topPanel}>
                            test

                        </div></Fade>}
                    </div>
                    <div>
                        <img src={mcgillIcon} width="50" height="50" alt="mcgillIcon" />
                    </div>
                    <div >
                        <b>McGill University</b> &#8213; <span>Major Physics and Computer Science </span> <br /> <i>[2021-current]</i>
                    </div>

                    <div className={styles.dropDownArrow}>
                        <img src={downArrow} width="30" height="30" />
                    </div>
                    <div>
                        <img src={mcgillIcon} width="50" height="50" alt="mcgillIcon" />
                    </div>
                    <div >
                        <b>McGill University</b> &#8213; <span>Honours Physics</span> <br /> <i>[2019-2021]</i>
                    </div>

                    <div className={styles.dropDownArrow}>
                        <img src={downArrow} width="30" height="30" />
                    </div>
                    <div>
                        <img src={bdebIcon} width="40" height="40" style={{ marginLeft: `5px` }} alt="bdebIcon" />
                    </div>
                    <div >
                        <b>Cegep Bois-de-Boulogne</b> &#8213; <span>Computer Science and Mathematics</span><br /> <i>[2015-2019]</i>
                    </div>
                </p>
            </div>
        </div>
    );
}

export default About;