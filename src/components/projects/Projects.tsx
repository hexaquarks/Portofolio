import { useState } from 'react';
import { Element } from 'react-scroll';

import javaIcon from '../../assets/java_icon.png';
import javaFXIcon from '../../assets/javaFX_icon.png';
import sceneBuilderIcon from '../../assets/sceneBuilder_icon.png';
import cssIcon from '../../assets/css_icon.png';
import javascriptIcon from '../../assets/javascript_icon_2.png';
import htmlIcon from '../../assets/html_icon.png';
import reactIcon from '../../assets/react_icon.png';
import githubIcon from '../../assets/githubBlack.png';

const styles = require('../projects/Projects.module.scss');

const Projects = () => {
    const projectLinks = [
        'https://github.com/hexaquarks/Particle_Fun',
        'https://hexaquarks.github.io/Weather_App/#/'
    ]
    
    const [{ topPictureLeft, leftTopStyle, leftBottomStyle, leftBottomOpacity, leftTopOpacity }, setTopPictureLeft] = useState<any | null>({
        topPictureLeft: 'top',
        leftTopStyle: 'preserve-3d',
        leftBottomStyle: 'translateZ(-10px)',
        leftTopOpacity: '100%',
        leftBottomOpacity: '50%'

    });
    const [{ topPictureRight, rightTopStyle, rightBottomStyle, rightBottomOpacity, rightTopOpacity }, setTopPictureRight] = useState<any | null>({
        topPictureRight: 'top',
        rightTopStyle: 'preserve-3d',
        rightBottomStyle: 'translateZ(-10px)',
        rightBottomOpacity: '50%',
        rightTopOpacity: '100%'
    });

    const setStyle = (direction, stack, type) => {
        let option = (type === 'cursor')
            ? { first : 'alias' , second : 'pointer', third: 'default'}
            : { first : 'opacityUp' , second : 'opacityDown', third: 'opacityDown' }
        
        let picture = (direction === 'left') ? topPictureLeft : topPictureRight
        if (stack === 'top') {
            return (picture === 'top') ? option.first : option.second;
        } else {
            return (picture === 'top') ? option.second : option.third;
        }
    }

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

    const changePicture = (stack, direction) => {
        let picture = (direction === 'left') ? topPictureLeft : topPictureRight
       
        if (stack === "top" && picture === "top") {
            openInNewTab(projectLinks[(direction === 'left')? 0 : 1])
        }
        const leftParams = {
            topPictureLeft: ['top', 'bottom'],
            leftTopStyle: ['preserve-3d', 'none'],
            leftBottomStyle: ['translateZ(-10px)', 'translateZ(0px)'],
            leftTopOpacity: ['100%', '50%'],
            leftBottomOpacity: ['50%', '100%']
        }
        const rightParams = {
            topPictureRight: ['top', 'bottom'],
            rightTopStyle: ['preserve-3d', 'none'],
            rightBottomStyle: ['translateZ(-10px)', 'translateZ(0px)'],
            rightTopOpacity: ['100%', '50%'],
            rightBottomOpacity: ['50%', '100%']
        }
        let obj = {};

        if (stack === 'top' && picture === 'bottom') {
            if (direction === 'left') {
                Object.keys(leftParams).forEach(k=> obj[k] = leftParams[k][0]);
                setTopPictureLeft(obj);
            } else {
                Object.keys(rightParams).forEach(k=> obj[k] = rightParams[k][0]);
                setTopPictureRight(obj);
            }
        } else if (stack === 'bottom' && picture === 'top') {
            if (direction === 'left') {
                Object.keys(leftParams).forEach(k=> obj[k] = leftParams[k][1]);
                setTopPictureLeft(obj);
            } else {
                Object.keys(rightParams).forEach(k=> obj[k] = rightParams[k][1]);
                setTopPictureRight(obj);
            }
        }
    }
    return (
        <Element id="projectsDiv" name="projectsDiv">
            <div className={styles.container}>
                <div className={styles.firstProjectGif}
                    style={{ transformStyle: 'preserve-3d' }}>

                    <div className={styles.firstProjectPicture}
                        onClick={() => { changePicture('top', 'left') }}
                        style={{ opacity: leftTopOpacity, cursor: setStyle('left', 'top', 'cursor') }}>
                    </div>
                    <div className={styles.firstProjectDescription}
                        onClick={() => { changePicture('bottom', 'left') }}
                        style={{
                            transform: leftBottomStyle,
                            cursor: setStyle('left', 'bottom', 'cursor'),
                            opacity: leftBottomOpacity
                        }}>
                        <span></span>
                        <h6>
                            <a href="https://github.com/hexaquarks/Particle_Fun" target="_blank">
                                <img src={githubIcon} width="30" height="30" />
                            </a>
                        </h6>
                        <p>The program alows the user to add and remove particles with variable size. The program simulates gravitational force, electrostatic force and allows for elastic collisions. Further, the dynamic quantity of particles can be arranged in shapes such as: circle, square, diamond, spiral, loose spiral, sunflower spiral. And finally, the shapes can then also be divided and rotated.</p>
                        <div className={styles.technologiesContainerFirst}>
                            <img src={javaIcon} width="45px" height="45px" />
                            <span >Java</span>
                            <img src={javaFXIcon} width="50px" height="60px"
                                style={{ marginTop: `-6px` }} />
                            <span >JavaFX</span>
                            <img src={sceneBuilderIcon} width="30px" height="40px"
                                style={{ marginLeft: `7px` }} alt="scenebuilder" />
                            <span >SceneBuilder</span>
                            <img src={cssIcon} width="30px" height="35px"
                                style={{ marginLeft: `7px`, marginTop: `2px` }}
                                alt="css" />
                            <span >CSS</span>
                        </div>
                    </div>
                </div>

                <div className={styles.secondProjectGif}
                    style={{ transformStyle: 'preserve-3d' }}>
                    <div className={styles.secondProjectPicture}
                        onClick={() => { changePicture('top', 'right') }}
                        style={{ opacity: rightTopOpacity, cursor: setStyle('right', 'top', 'cursor') }} />
                    <div className={styles.secondProjectDescription}
                        onClick={() => { changePicture('bottom', 'right') }}
                        style={{
                            transform: rightBottomStyle,
                            cursor: setStyle('right', 'bottom', 'cursor'),
                            opacity: rightBottomOpacity
                        }} >

                        <span></span>
                        <h6>
                            <a href="https://github.com/hexaquarks/Weather_App" target="_blank">
                                <img src={githubIcon} width="30" height="30" />
                            </a>
                        </h6>
                        <p>The program fetches data from <a href="https://openweathermap.org/" style={{ textDecoration: `none;` }}>OpenWweather</a> API and displays the daily information overview and detailed information. Further, a 24 hours and 7 days forecast for temperature and precipitation, is displayed in a carousel container along with bar graphs respectively. </p>
                        <div className={styles.technologiesContainerSecond}>
                            <img src={reactIcon} width="40px" height="40px"
                                style={{ marginRight: `10px` }} />
                            <span >React</span>
                            <img src={javascriptIcon} width="30px" height="40px"
                                style={{ marginTop: `-6px` }} />
                            <span >Javascript</span>
                            <img src={cssIcon} width="40px" height="40px"
                                style={{ marginLeft: `1px` }} alt="scenebuilder" />
                            <span >CSS</span>
                            <img src={htmlIcon} width="30px" height="39px"
                                style={{ marginLeft: `0px`, marginTop: `2px` }}
                                alt="css" />
                            <span >HTML5</span>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    );
}

export default Projects;