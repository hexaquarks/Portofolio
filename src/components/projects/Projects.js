import styles from '../projects/Projects.module.scss';
import react, { useState } from 'react';
import javaIcon from '../../assets/java_icon.png';
import javaFXIcon from '../../assets/javaFX_icon.png';
import sceneBuilderIcon from '../../assets/sceneBuilder_icon.png';
import cssIcon from '../../assets/css_icon.png';

const Projects = () => {

    const [{topPictureLeft, leftTopStyle, leftBottomStyle, leftBottomOpacity, leftTopOpacity}, setTopPictureLeft] = useState({
        topPictureLeft: 'top',
        leftTopStyle: 'preserve-3d',
        leftBottomStyle: 'translateZ(-10px)',
        leftTopOpacity: '100%',
        leftBottomOpacity: '50%'

    });
    const [{topPictureRight, rightTopStyle, rightBottomStyle, rightBottomOpacity,rightTopOpacity }, setTopPictureRight] = useState({
        topPictureRight: 'top',
        rightTopStyle: 'preserve-3d',
        rightBottomStyle: 'translateZ(-10px)',
        rightBottomOpacity: '50%',
        rightTopOpacity: '100%'
    });
    // const [{leftAnimationTop, leftAnimationBottom}, setLeftAnimation] = useState({
    //     leftAnimationTop: 
    // })

    const cursorStyle = (direction, stack) =>{
        if(direction === 'left'){
            if(stack === 'top'){
                return (topPictureLeft==='top') ? 'default' : 'pointer';                
            } else {
                return (topPictureLeft==='top') ? 'pointer' : 'default';
            }
        } else {
            if(stack === 'top'){
                return (topPictureRight==='top') ? 'default' : 'pointer';                
            } else {
                return (topPictureRight==='top') ? 'pointer' : 'default';
            }
        }
    }

    const animationStyle = (direction, stack) =>{
        console.log("here")
        if(direction === 'left'){
            if(stack === 'top'){
                return (topPictureLeft==='top') ? 'opacityUp;' : 'opacityDown;';                
            } else {
                return (topPictureLeft==='top') ? 'opacityDown;' : 'opacityUp;';
            }
        } else {
            if(stack === 'top'){
                return (topPictureRight==='top') ? 'opacityUp' : 'opacityDown';                
            } else {
                return (topPictureRight==='top') ? 'opacityDown' : 'opacityUp';
            }
        }
    }

    const changePicture = (stack, direction) => {

        if (direction === 'left') {
            if (stack === 'top' && topPictureLeft === 'bottom') {
                setTopPictureLeft({
                    topPictureLeft: 'top',
                    leftTopStyle: 'preserve-3d',
                    leftBottomStyle: 'translateZ(-10px)',
                    leftTopOpacity: '100%',
                    leftBottomOpacity: '50%'
                });
            } else if (stack === 'bottom' && topPictureLeft === 'top') {
                setTopPictureLeft({
                    topPictureLeft: 'bottom',
                    leftTopStyle: 'none',
                    leftBottomStyle: 'translateZ(0px)',
                    leftBottomOpacity: '100%',
                    leftTopOpacity: '50%'
                });
            }
        }
        if (direction === 'right') {
            if (stack === 'top' && topPictureRight === 'bottom') {
                setTopPictureRight({
                    topPictureRight: 'top',
                    rightTopStyle: 'preserve-3d',
                    rightBottomStyle: 'translateZ(-10px)',
                    rightTopOpacity: '100%',
                    rightBottomOpacity: '50%'
                });
            } else if (stack === 'bottom' && topPictureRight === 'top') {
                setTopPictureRight({
                    topPictureRight: 'bottom',
                    rightTopStyle: 'none',
                    rightBottomStyle: 'translateZ(0px)',
                    rightBottomOpacity: '100%',
                    rightTopOpacity: '50%'
                });
            }
        }

    }
    return (
        <div className={styles.container}>
            <div className={styles.firstProjectGif}
                style={{ transformStyle: leftTopStyle }}>

                <div className={styles.firstProjectPicture}
                    onClick={() => { changePicture('top', 'left') }}
                    style={{opacity: leftTopOpacity, cursor: cursorStyle('left', 'top')}}>
                </div>
                <div className={styles.firstProjectDescription}
                    onClick={() => { changePicture('bottom', 'left') }}
                    style={{ transform: leftBottomStyle ,
                             cursor: cursorStyle('left', 'bottom'),
                             opacity: leftBottomOpacity}}>
                    <span></span>
                    <p>The program alows the user to add and remove particles with variable size. The program simulates gravitational force, electrostatic force and allows for elastic collisions. Further, the dynamic quantity of particles can be arranged in shapes such as: circle, square, diamond, spiral, loose spiral, sunflower spiral. And finally, the shapes can then also be divided and rotated.</p>
                    <div className={styles.technologiesContainer}>
                        <img src={javaIcon} width="45px" height="45px"/>
                        <span >Java</span>
                        <img src={javaFXIcon} width="50px" height="60px"
                            style={{ marginTop: `-6px`}}/>
                        <span >JavaFX</span>
                        <img src={sceneBuilderIcon} width="30px" height="40px"
                            style={{marginLeft: `7px`}}/>
                        <span >SceneBuilder</span>
                        <img src={cssIcon} width="30px" height="35px"
                            style={{marginLeft: `7px`, marginTop: `2px`}}/>
                        <span >CSS</span>
                    </div>
                </div>
            </div>

            <div className={styles.secondProjectGif}
                style={{ transformStyle: rightTopStyle }}>
                <div className={styles.secondProjectPicture}
                    onClick={() => { changePicture('top', 'right') }}
                    style={{opacity: rightTopOpacity ,cursor: cursorStyle('right', 'top')}} />
                <div className={styles.secondProjectDescription}
                    onClick={() => { changePicture('bottom', 'right') }}
                    style={{ transform: rightBottomStyle,
                         cursor: cursorStyle('right', 'bottom'),
                         opacity: rightBottomOpacity}} />
            </div>
        </div>
    );
}

export default Projects;