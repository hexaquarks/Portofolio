import { useState } from 'react';
import styles from './LatexFolders.module.scss';
import openFolder from '../../../assets/folderOpen.png';
import closedFolder from '../../../assets/folderClosed.png';
import note from '../../../assets/notes.png';
import book from '../../../assets/bookIcon.png';
import code from '../../../assets/code.png';
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
    {name: 'MATH314', files: ["Notes", "Ass4", "code"]},
    {name: 'PHYS350', files: ["Ass1","Ass2","Ass3","Ass4","Ass5","Ass6","Ass7","Ass8", "code"]},
    {name: 'PHYS356', files: ["Ass1","Ass2","Ass3","Ass4","Ass5","Ass6","Ass7","Ass8","Ass9", "code"]},
    {name: 'MATH327', files: ["Ass1","Ass2","Ass3","Ass4","Ass5", "code"]},
    {name: 'MATH475', files: ["Ass1","Ass2","Ass3", "code"]},
    {name: 'MATH325', files: ["Final","Ass1","Ass2","Ass3","Ass4","Ass5", "code"]}, 
    {name: 'MATH240', files: ["Ass1","Ass2","Ass3","Ass4", "code"]},
    {name: 'PHYS241', files: ["Final","Ass1","Ass2","Ass3","Ass4","Ass5", "code"]},
    {name: 'PHYS230', files: ["Ass5","Ass7","Ass8","Ass9","Ass10"]},

    // {name: 'MATH314', total: 3, fcn: 1, ass: 1, code: 1},
    // {name: 'PHYS350', total: 9, fcn: 0, ass: 8, code: 1},
    // {name: 'PHYS356', total: 10, fcn: 0, ass: 9, code: 1},
    // {name: 'MATH327', total: 6, fcn: 0, ass: 5, code: 1},
    // {name: 'MATH475', total: 4, fcn: 0, ass: 3, code: 1},
    // {name: 'MATH325', total: 6, fcn: 0, ass: 4, code: 1}, //also final exam
    // {name: 'MATH240', total: 5, fcn: 0, ass: 4, code: 1},
    // {name: 'PHYS241', total: 7, fcn: 0, ass: 5, code: 1}, //also final exam
    // {name: 'PHYS230', total: 6, fcn: 0, ass: 5, code: 1},
  ];

  return (
    <div className={styles.folderContainer} key={key}>
      <Fade in={showDescription}>
          <div className={`${styles.decriptionPanel}`}>
            <div className={styles.image}>

            </div>
            <div className={styles.description}>
              <div className={styles.filesGrid} >
                {buildButtons(numberOfElements, index)}
                  {/* <button>
                    <img src={book}></img>
                    <span>Class Notes</span>
                  </button>
                  <button>
                    <img src={note}></img>
                    <span>Assignment 1</span>
                  </button>
                  <button>aa</button>
                  <button>a</button>
                  <button>a</button> */}
              </div>  
            </div>
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

const buildButtons =(numberOfElements, index) => {
  var temp: any = [];
  const globalLink = "https://github.com/hexaquarks/Latex_Files/"; //link header
  const folder = "tree/main/"; //for folder
  const notes = "blob/main/"; //for any file

  for(var i=0 ; i<numberOfElements[index].files.length; i++){

    let firstLetter = numberOfElements[index].files[i].charAt(0);
    let refLink = globalLink;
    let imgLink = '';
    let text = '';

    firstLetter === 'c' 
      ? refLink += folder + numberOfElements[index].name + '/' + numberOfElements[index].name + '_Tex'
      : refLink += notes + numberOfElements[index].name + '/' + numberOfElements[index].name + '_' + numberOfElements[index].files[i] + '.pdf';

    if(firstLetter === 'N'){
      imgLink = book;
      text = 'Class Notes';
    }else if(firstLetter === 'A' || firstLetter ==='F') {
      imgLink = note;
      firstLetter === 'A' 
        ? text = 'Assignment' + ' ' + numberOfElements[index].files[i].substr(numberOfElements[index].files[i].length -1)
        : text = 'Final Exam'
    }else {
      imgLink = code; 
      text = 'Code Repo'
    }

    temp.push (
      <a href={refLink} target="_blank">
        <button>
          <img src={imgLink} height="12" />
          <span>
            {text}
          </span>
        </button>
      </a>
      );
  }
  
  return temp;
}

export default CourseFolder;