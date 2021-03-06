import { useState } from 'react';
import CourseFolder from "./CourseFolder";

import styles from './LatexFolders.module.scss';

const LEFT_MAX = 780;
const SHIFT = 130;

const LatexFolders = () => {

    const [xPos, setXPos] = useState(0);
    const [enableArrows, setEnableArrows] = useState(false);


    const onClick = (direction) => {
        if(enableArrows) return;

        setXPos((direction === 'left') 
            ? xPos === -LEFT_MAX ? xPos : xPos - SHIFT
            : xPos === 0 ? xPos : xPos + SHIFT
        );
    }

    const manageOpacity = (direction, xPos) => {
        if(enableArrows) return 25;
        
        if (xPos === 0) return direction === 'left' ? 25 : 100;
        else if (xPos < 0 && xPos > -LEFT_MAX) return 100;
        else if (xPos === -LEFT_MAX) return direction === 'left' ? 100 : 25;
    }

    const courseNames = [
        { id: 'MATH 314', name: 'Advanced Calculus' },
        { id: 'PHYS 350', name: 'Hons. Quantum Mechanics' },
        { id: 'PHYS 356', name: 'Hons. Electricity and Magnetism' },
        { id: 'MATH 327', name: 'Matrix Numerical Analysis' },
        { id: 'MATH 475', name: 'Hons. Partial Differential Equations' },
        { id: 'MATH 325', name: 'Hons. Ordinary Differntial Equations' },
        { id: 'MATH 240', name: 'Discret Mathematics' },
        { id: 'PHYS 241', name: 'Signals Processing' },
        { id: 'PHYS 230', name: 'Dynamics of Simple Systems' }
    ]

    return (
        <div className={styles.window}>
            <h2>
                LaTeX 
            </h2>
            <hr />
            <button className={styles.left_arrow}
                onClick={() => onClick('right')}
                style={{ opacity: `${manageOpacity('left', xPos)}%` }}>
            </button>
            
            <div className={`${styles.slider}`}>
                <div className={styles.container} style={{ transform: `translateX(${xPos}px)` }}>
                    {courseNames.map((value, index) => (
                        <CourseFolder value={value} key={index} 
                                      xPos={xPos} index={index} 
                                      setEnableArrows={setEnableArrows}
                        />
                    ))}
                </div>
            </div>
            <button className={styles.right_arrow}
                    onClick={() => onClick('left')}
                    style={{ opacity: `${manageOpacity('right', xPos)}%` }}>
            </button>
        </div>
    )
}

export default LatexFolders;