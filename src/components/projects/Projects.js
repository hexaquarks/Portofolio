import styles from '../projects/Projects.module.scss';
import react, { useState } from 'react';

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