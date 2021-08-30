import styles from '../about/About.module.css';
import mcgillIcon from '../../assets/mcgill_icon.png';
import bdebIcon from '../../assets/bdeb_icon.png';
import downArrow from '../../assets/down_arrow.png';
import { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import Fade from '@material-ui/core/Fade';
import { TextField } from '@material-ui/core';
import { useEffect } from 'react';

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

    // const [{gif, loaded} ,setState] = useState({
    //     gif: `${styles.container}`,
    //     loaded: `${styles.container}`
    // });

    // const reloadGif = () => {
    //     setState({loaded: ''})
    //     setTimeout(() => {
    //       setState({loaded: `${styles.container}`})
    //     }, 0)
    //   }
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
                            styles={{ Animation: `rotate 1s` }}
                        >
                        </img>
                        <Fade in={topDropDown}>
                            <div className={styles.decriptionPanel}>
                                <fieldset>
                                    <legend>Relevent Coursework</legend>
                                    <div className={styles.coursesList} >
                                        <ul>
                                            <li>Introduction to Computer Science</li>
                                            <li>Software Systems</li>
                                            <li>Matrix Numerical analysis</li>
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
                                            <li>Quantum Mechanics I (Hons.)</li>
                                            <li>Electricy and Magnetism I (Hons.)</li>
                                            <li>Ordinary Differential Equations (Hons.)</li>
                                            <li>Partial Differential Equations (Hons.)</li>
                                            <li>Signals Processing</li>
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
                                            <li>Introduction to Programming</li>
                                            <li>Data Structures and OOP.</li>
                                            <li>Programming with Graphical Interfaces</li>
                                            <li>Degree Programming Final Project </li>
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