import { useState } from 'react';
import styles from './LatexFolders.module.scss';
import openFolder from '../../../assets/folderOpen.png';
import closedFolder from '../../../assets/folderClosed.png';
import { Fade } from '@material-ui/core';

function CourseFolder(props) {
  const { value, key, xPos, index } = props;

  const [image, setImage] = useState(closedFolder);
  const [showDescription, setShowDescription] = useState(false);

  const handleMouseOver = () => {
    setImage(openFolder);
  };

  const handleMouseLeave = () => {
    setImage(closedFolder);
  };

  const numberOfElements = [
    {name: 'MATH 314', total: 3, fcn: 1, ass: 1, code: 1},
    {name: 'MATH 475', total: 4, fcn: 0, ass: 3, code: 1},
    {name: 'MATH 325', total: 6, fcn: 0, ass: 4, code: 1}, //also final exam
    {name: 'MATH 240', total: 5, fcn: 0, ass: 4, code: 1},
    {name: 'PHYS 241', total: 7, fcn: 0, ass: 5, code: 1}, //also final exam
    {name: 'PHYS 350', total: 9, fcn: 0, ass: 8, code: 1},
    {name: 'PHYS 356', total: 10, fcn: 0, ass: 9, code: 1},
    {name: 'MATH 327', total: 6, fcn: 0, ass: 5, code: 1},
    {name: 'PHYS 230', total: 6, fcn: 0, ass: 5, code: 1},
  ]

  return (
    <div className={styles.folderContainer} key={key}>
      <Fade in={showDescription}>
          <div className={styles.decriptionPanel}>
            {/* <fieldset>
              <legend>Relevent Coursework</legend>
              <div className={styles.coursesList} >
                <ul>
                  <li>Introduction to Computer Science <i>(Java)</i></li>
                  <li>Software Systems <i>(C, Bash)</i></li>
                  <li>Matrix Numerical analysis <i>(MATLAB)</i></li>
                  <li>Discrete Mathematics</li>
                </ul>
              </div>
            </fieldset> */}

          </div>
        </Fade>
      <span>{value.id}</span>
      <div
        onMouseEnter={() => {
          handleMouseOver();
        }}
        onMouseLeave={() => {
          handleMouseLeave();
        }}
        onClick={() => {
          setShowDescription(!showDescription);
        }}
      >
        <img className={-xPos / 130 !== index - 1 ? styles.shrinkImage : ''} src={image} width="130" alt="alternative" />
      </div>
    </div>
  );
}

export default CourseFolder;