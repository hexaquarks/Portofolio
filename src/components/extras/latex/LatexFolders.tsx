import { useState } from 'react';
import styles from './LatexFolders.module.scss';

import CourseFolder from "./CourseFolder";

const LatexFolders = () => {

    const [xPos, setXPos] = useState(0);
    const leftMax = 780;

    const onClick = (direction) => {
        if (direction === 'left') {
            xPos === -leftMax ? setXPos(xPos) : setXPos(xPos - 130);
        } else {
            xPos === 0 ? setXPos(xPos) : setXPos(xPos + 130);
        }
    }

    const manageOpacity = (direction, xPos) => {
        if (xPos === 0) return direction === 'left' ? 25 : 100;
        else if (xPos < 0 && xPos > -leftMax) return 100;
        else if (xPos === -leftMax) return direction === 'left' ? 100 : 25;
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
        <div className={styles.forecast_window}>
            <button className={styles.left_arrow}
                onClick={() => onClick('right')}
                style={{ opacity: `${manageOpacity('left', xPos)}%` }}>
            </button>
            
            <div className={`${styles.forecast_slider}`}>
                <div className={styles.forecast_container} style={{ transform: `translateX(${xPos}px)` }}>
                    {courseNames.map((value, index) => (
                        <CourseFolder value={value} key={index} xPos={xPos} index={index} />
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