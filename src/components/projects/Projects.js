import styles from '../projects/Projects.module.css';
import react, { useState } from 'react';

const Projects = () => {

    const [{topPictureLeft, leftTopStyle, leftBottomStyle, cursorLeft}, setTopPictureLeft] = useState({
        topPictureLeft: 'top',
        leftTopStyle: 'preserve-3d',
        leftBottomStyle: 'translateZ(-10px)',
        cursorLeft: 'default'
    });
    const [{topPictureRight, rightTopStyle, rightBottomStyle, cursorRight}, setTopPictureRight] = useState({
        topPictureRight: 'top',
        rightTopStyle: 'preserve-3d',
        rightBottomStyle: 'translateZ(-10px)',
        cursorRight: 'default'
    });

    const changePicture = (stack, direction) => {

        if (direction === 'left') {
            if (stack === 'top' && topPictureLeft === 'bottom') {
                setTopPictureLeft({
                    topPictureLeft: 'top',
                    leftTopStyle: 'preserve-3d',
                    leftBottomStyle: 'translateZ(-10px)',
                    cursorLeft: 'pointer'
                });
            } else if (stack === 'bottom' && topPictureLeft === 'top') {
                setTopPictureLeft({
                    topPictureLeft: 'bottom',
                    leftTopStyle: 'none',
                    leftBottomStyle: 'translateZ(0px)',
                    cursorLeft: 'default'
                });
            }
        }
        if (direction === 'right') {
            if (stack === 'top' && topPictureRight === 'bottom') {
                setTopPictureRight({
                    topPictureRight: 'top',
                    rightTopStyle: 'preserve-3d',
                    rightBottomStyle: 'translateZ(-10px)',
                    cursorRight: 'pointer'
                });
            } else if (stack === 'bottom' && topPictureRight === 'top') {
                setTopPictureRight({
                    topPictureRight: 'bottom',
                    rightTopStyle: 'none',
                    rightBottomStyle: 'translateZ(0px)',
                    cursorRight: 'default'
                });
            }
        }

    }
    return (
        <div className={styles.container}>
            <div className={styles.firstProjectGif}
                style={{ transformStyle: leftTopStyle, cursor: cursorLeft }}>

                <div className={styles.firstProjectPicture}
                    onClick={() => { changePicture('top', 'left') }}>
                </div>
                <div className={styles.firstProjectDescription}
                    onClick={() => { changePicture('bottom', 'left') }}
                    style={{ transform: leftBottomStyle , cursor: cursorLeft}}>
                </div>
            </div>

            <div className={styles.secondProjectGif}
                style={{ transformStyle: rightTopStyle }}>
                <div className={styles.secondProjectPicture}
                    onClick={() => { changePicture('top', 'right') }} />
                <div className={styles.secondProjectDescription}
                    onClick={() => { changePicture('bottom', 'right') }}
                    style={{ transform: rightBottomStyle }} />
            </div>
        </div>
    );
}

export default Projects;