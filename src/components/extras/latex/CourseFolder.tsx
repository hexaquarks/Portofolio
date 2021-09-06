import { useState } from 'react';
import styles from './LatexFolders.module.scss';
import downArrow from '../../../assets/down_arrow.png';
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
  const [dropDown, setDropDown] = useState(false);
  const [leftVal, setLeftVal] = useState(-xPos);

  const handleMouseOver = () => {
    setImage(openFolder);
  };

  const handleMouseLeave = () => {
    setImage(closedFolder);
  };

  // const removeDescription = () => {
  //   console.log("innnn");
  //   setDropDown(false);
  // }

  const numberOfElements = [
    { name: 'MATH314', files: ["Notes", "Ass4", "code"] },
    { name: 'PHYS350', files: ["Ass1", "Ass2", "Ass3", "Ass4", "Ass5", "Ass6", "Ass7", "code"] },
    { name: 'PHYS356', files: ["Ass1", "Ass2", "Ass3", "Ass4", "Ass5", "Ass6", "Ass7", "code"] },
    { name: 'MATH327', files: ["Ass1", "Ass2", "Ass3", "Ass4", "Ass5", "code"] },
    { name: 'MATH475', files: ["Ass1", "Ass2", "Ass3", "code"] },
    { name: 'MATH325', files: ["Final", "Ass1", "Ass2", "Ass3", "Ass4", "Ass5", "code"] },
    { name: 'MATH240', files: ["Ass1", "Ass2", "Ass3", "Ass4", "code"] },
    { name: 'PHYS241', files: ["Final", "Ass1", "Ass2", "Ass3", "Ass4", "Ass5", "code"] },
    { name: 'PHYS230', files: ["Ass5", "Ass7", "Ass8", "Ass9", "Ass10"] },
  ];

  return (
    <div className={styles.folderContainer}>

      <div className={`${styles.decriptionPanel}`} key={xPos} style={ {left: -xPos ,top: showDescription ? `0px` : `-160px`} }>
        <div className={styles.imageContainer}>
          <span >
            {value.name}
            <p>
              <img src={downArrow} width="30" onClick={() => {setShowDescription(!showDescription);}}/>
            </p>
          </span>
          <div className={styles.image}  ></div>
        </div>
        <div className={styles.description}>
          <div className={styles.filesGrid} >
            {buildButtons(numberOfElements, index)}
          </div>
        </div>
      </div>

      <span>{value.id}</span>
      <div key={index}
        onMouseEnter={() => {
          handleMouseOver();
        }}
        onMouseLeave={() => {
          handleMouseLeave();
        }}
        onClick={() => {
          // setLeftVal(-xPos);
          setShowDescription(!showDescription);

        }}
      >
        <img className={-xPos / 130 !== index - 1 ? styles.shrinkImage : ''} src={image} width="130" alt="alternative" />
      </div>
    </div>
  );
}

const buildButtons = (numberOfElements, index) => {
  var temp: any = [];
  const globalLink = "https://github.com/hexaquarks/Latex_Files/"; //link header
  const folder = "tree/main/"; //for folder
  const notes = "blob/main/"; //for any file

  for (var i = 0; i < numberOfElements[index].files.length; i++) {

    let firstLetter = numberOfElements[index].files[i].charAt(0);
    let refLink = globalLink;
    let imgLink = '';
    let text = '';

    firstLetter === 'c'
      ? refLink += folder + numberOfElements[index].name + '/' + numberOfElements[index].name + '_Tex'
      : refLink += notes + numberOfElements[index].name + '/' + numberOfElements[index].name + '_' + numberOfElements[index].files[i] + '.pdf';

    if (firstLetter === 'N') {
      imgLink = book;
      text = 'Class Notes' + '\xa0\xa0\xa0\xa0';
    } else if (firstLetter === 'A' || firstLetter === 'F') {
      imgLink = note;
      firstLetter === 'A'
        ? text = 'Assignment' + ' ' + numberOfElements[index].files[i].substr(numberOfElements[index].files[i].length - 1)
        : text = `Final Exam` + '\xa0\xa0\xa0\xa0\xa0\xa0';
    } else {
      imgLink = code;
      text = `Code Repo` + '\xa0\xa0\xa0\xa0\xa0\xa0';
    }

    temp.push(
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