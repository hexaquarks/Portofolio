import { useState } from 'react';
import styles from './LatexFolders.module.scss';
import openFolder from '../../../assets/folderOpen.png';
import closedFolder from '../../../assets/folderClosed.png';

function CourseFolder(props) {
  const { value, key , xPos, index} = props;

  const [image, setImage] = useState(closedFolder);

  const handleMouseOver = () => {
    setImage(openFolder);
  };

  const handleMouseLeave = () => {
    setImage(closedFolder);
  };

  return (
    <div className={styles.folderContainer} key={key}>
      <span>{value.id}</span>
      <div
        onMouseEnter={() => {
          handleMouseOver();
        }}
        onMouseLeave={() => {
          handleMouseLeave();
        }}
      >
        <img className={-xPos/130 !== index-1 ? styles.shrinkImage : ''} src={image} width="130" alt="alternative" />
      </div>
    </div>
  );
}

export default CourseFolder;