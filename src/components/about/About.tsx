import mcgillIcon from '../../assets/mcgill_icon.png';
import bdebIcon from '../../assets/bdeb_icon.png';
import downArrow from '../../assets/down_arrow.png';
import { useState } from 'react';
import Fade from '@material-ui/core/Fade';

const styles = require('../about/About.module.scss');

const About = () => {
    const [topDropDown, setTopDropDown] = useState(false);
    const [midDropDown, setMidDropDown] = useState(false);
    const [botDropDown, setBotDropDown] = useState(false);
    

    const onClick = (type) => {
        if (type === 'top') {
            setTopDropDown(!topDropDown);
            setBotDropDown(false);
            setMidDropDown(false);
        } else if (type === 'mid') {
            setMidDropDown(!midDropDown);
            setTopDropDown(false);
            setBotDropDown(false);
        } else if (type === 'bot') { 
            setBotDropDown(!botDropDown);
            setTopDropDown(false);
            setMidDropDown(false);
        }
    }
    return (
        <div className={styles.container}>
            {/* <button onClick={reloadGif}>Replay</button> */}
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
                        <img className={topDropDown === true ? `${styles.dropArrow} ${styles.doRotate}` : `${styles.dropArrow}`}
                            src={downArrow} width="30" height="30"
                            onClick={() => { onClick('top') }}
                        >
                        </img>
                        <Fade in={topDropDown}>
                            <div className={styles.decriptionPanel}>
                                <fieldset>
                                    <legend>Relevent Coursework</legend>
                                    <div className={styles.coursesList} >
                                        <ul>
                                            <li>Introduction to Computer Science <i>(Java)</i></li>
                                            <li>Software Systems <i>(C, Bash)</i></li>
                                            <li>Matrix Numerical analysis <i>(MATLAB)</i></li>
                                            <li>Discrete Mathematics</li>
                                        </ul>
                                    </div>
                                </fieldset>
                            </div>
                        </Fade>
                    </div>
                    <div>
                        <img src={mcgillIcon} width="50" height="50" alt="mcgillIcon" />
                    </div>
                    <div >
                        <b>McGill University</b> &#8213; <span>Major Physics and Computer Science </span> <br /> <i>[2021-current]</i>
                    </div>

                    <div className={styles.dropDownArrow}>
                        <img className={midDropDown === true ? `${styles.dropArrow} ${styles.doRotate}` : `${styles.dropArrow}`}
                            src={downArrow} width="30" height="30"
                            onClick={() => { onClick('mid') }}>
                        </img>
                        <Fade in={midDropDown}>
                            <div className={styles.decriptionPanel}>
                                <fieldset>
                                    <legend>Relevent Coursework</legend>
                                    <div className={styles.coursesList} >
                                        <ul>
                                            <li>(Hons.) Quantum Mechanics I <i>(Mathematica)</i></li>
                                            <li>(Hons.) Electricy and Magnetism I <i>(Python)</i></li>
                                            <li>(Hons.) Ordinary Differential Equations <i>(MATLAB)</i></li>
                                            <li>(Hons.) Partial Differential Equations </li>
                                            <li>Signals Processing <i>(Python)</i></li>
                                        </ul>
                                    </div>
                                </fieldset>
                            </div>
                        </Fade>
                    </div>
                    <div>
                        <img src={mcgillIcon} width="50" height="50" alt="mcgillIcon" />
                    </div>
                    <div >
                        <b>McGill University</b> &#8213; <span>Honours Physics</span> <br /> <i>[2019-2021]</i>
                    </div>

                    <div className={styles.dropDownArrow}>
                        <img className={botDropDown === true 
                                ? `${styles.dropArrow} ${styles.doRotate}` 
                                : `${styles.dropArrow}`}
                            src={downArrow} width="30" height="30"
                            onClick={() => { onClick('bot') }}>
                        </img>
                        <Fade in={botDropDown}>
                            <div className={styles.decriptionPanel}>
                                <fieldset>
                                    <legend>Relevent Coursework</legend>
                                    <div className={styles.coursesList} >
                                        <ul>
                                            <li>Introduction to Programming <i>(Java)</i></li>
                                            <li>Data Structures and OOP. <i>(Java)</i></li>
                                            <li>Programming with Graphical Interfaces <i>(Java)</i></li>
                                            <li>Degree Programming Final Project <i>(Java)</i></li>
                                        </ul>
                                    </div>
                                </fieldset>
                            </div>
                        </Fade>
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