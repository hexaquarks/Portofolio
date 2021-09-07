import mcgillIcon from '../../assets/mcgill_icon.png';
import bdebIcon from '../../assets/bdeb_icon.png';
import downArrow from '../../assets/down_arrow.png';
import { useState } from 'react';
import Fade from '@material-ui/core/Fade';
import DropDown from './DropDown';

const styles = require('../about/About.module.scss');

const information = [
    {
        title: 'McGill University',
        description: 'Mahor Physics and Computer Science',
        year: '[2021-current]',
        image: mcgillIcon,
        coursework : [
            {
                course: 'Introduction to Computer Science', 
                language: '(Java)'
            },
            {
                course: 'Software Systems', 
                language: '(C, Bash)'
            },
            {
                course: 'Matrix Numerical Analysis', 
                language: '(MATLAB)'
            },
            {
                course: 'Discrete Mathematics', 
            }
        ]
    },
    {
        title: 'McGill University',
        description: 'Honours Physics',
        year: '[2019-2021]',
        image: mcgillIcon,
        coursework : [
            {
                course: '(Hons.) Quantum Mechanics I', 
                language: '(Mathematica)'
            },
            {
                course: '(Hons.) Electricity and Magnetism I', 
                language: '(Python)'
            },
            {
                course: '(Hons.) Ordinary Differential Equations', 
                language: '(MATLAB)'
            },
            {
                course: '(Hons.) Partial Differential Equations', 
            },
            {
                course: 'Signals Processing' ,
                language: '(Python)'
            }
        ]
    },
    {
        title: 'Cegep-De-Bois-de-Boulogn',
        description: 'Computer Science and Mathematics',
        year: '[2015-2019]',
        image: bdebIcon,
        coursework : [
            {
                course: 'Introduction ot Programming', 
                language: '(Java)'
            },
            {
                course: 'Data Structures and OOP', 
                language: '(Java)'
            },
            {
                course: 'Programming with Graphical Interfaces', 
                language: '(Java)'
            },
            {
                course: 'Degree Programming Final Project' ,
                language: '(Java)'
            }
        ]
    }
]

const About = () => {
    const [topDropDown, setTopDropDown] = useState(false);
    const [midDropDown, setMidDropDown] = useState(false);
    const [botDropDown, setBotDropDown] = useState(false);

    const [{restFalse, type}, setRestFalse] = useState({
        restFalse: true,
        type: ''
    });
    

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
                    {information.map((value, index) => (
                        <DropDown information={information} index={index} />
                    ))}
                </p>
            </div>
        </div>
    );
}

export default About;