import { useState } from 'react';
import styles from './LatexFolders.module.scss';
import openFolder from '../../assets/folderOpen.png';
import closedFolder from '../../assets/folderClosed.png';

const LatexFolders = () => {

    const [xPos, setXPos] = useState(0);
    const onClick = (direction) => {
        if (direction === 'left') {
            xPos === -900 ? setXPos(xPos) : setXPos(xPos - 100);
        } else {
            xPos === 0 ? setXPos(xPos) : setXPos(xPos + 100);
        }
    }

    return (
        <div className={styles.forecast_window}>
            <button className={styles.left_arrow}
                onClick={() => onClick('right')}>
            </button>
            <div className={styles.forecast_slider}>
                <div className={styles.forecast_container} style={{ transform: `translateX(${xPos}px)` }}>
                    {buildLatexFolder()}
                </div>
            </div>
            <button className={styles.right_arrow}
                onClick={() => onClick('left')}>
            </button>
        </div>
    )
}

const buildLatexFolder = () => {
    const courseNames = [
        { id: 'MATH 314', name: 'Advanced Calculus' },
        { id: 'MATH 475', name: 'Hons. Partial Differential Equations' },
        { id: 'MATH 325', name: 'Hons. Ordinary Differntial Equations' },
        { id: 'MATH 240', name: 'Discret Mathematics' },
        { id: 'PHYS 241', name: 'Signals Processing' },
        { id: 'PHYS 350', name: 'Hons. Quantum Mechanics' },
        { id: 'PHYS 356', name: 'Hons. Electricity and Magnetism' },
        { id: 'MATH 327', name: 'Matrix Numerical Analysis' },
        { id: 'PHYS 230', name: 'Dynamics of Simple Systems' }
    ]

    var folders = courseNames.map((value, index) => {
        return (
            <div>
                <span>{value.id}</span>
                <img src={closedFolder} width="75"/>
                <p>{value.name}</p>
            </div>
        );
    });
    return folders;
}

export default LatexFolders;