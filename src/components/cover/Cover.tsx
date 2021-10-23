import { useEffect, useState } from 'react';
import { Element } from 'react-scroll'

import coverPicture from '../../assets/profile_picture.png';
import TitleLetter from './TitleLetter';
import chainGif from '../../assets/chain.gif';

const styles = require('../cover/Cover.module.scss');

const Cover = () => {
    const nameLetters = [
        'M', 'i', 'h', 'a', 'i', 'l', '&nbsp;',
        'A', 'n', 'g', 'h', 'e', 'l', 'i', 'c', 'i'
    ]

    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 6200);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <Element id="homeDiv" name="homeDiv">
            <div className={styles.container}>
                <div className={styles.chainGif}>
                    <img src={`${chainGif}?${Math.random()}`} alt="firstChain"
                        width="100" height="90" >
                    </img>
                    <img src={`${chainGif}?${Math.random()}`} alt="secondChain"
                        width="100" height="90" >
                    </img>
                </div>
                <div className={styles.description} >
                    <ul>
                        {nameLetters.map((value, index) => (
                            <TitleLetter name={value} index={index} />
                        ))}
                    </ul>
                    <h2>
                        Software developper living in the Greater Montreal area. I am interested in most technologies across the back-end and front-end, and the respective practices associated with them.
                    </h2>
                </div>
                <img src={coverPicture} alt='cover_picture' />
            </div>
        </Element>
    );
}

export default Cover;