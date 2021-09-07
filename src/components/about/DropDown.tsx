import { Fade } from "@material-ui/core";
import React, { useState } from "react";
import downArrow from '../../assets/down_arrow.png';


const styles = require('./About.module.scss');

const DropDown = (props) => {
    const { information ,index } = props;
    const [dropDown, setDropDown] = useState(false);
    return ( 
        <React.Fragment>
        <div className={styles.dropDownArrow}>
            <img className={dropDown === true ? `${styles.dropArrow} ${styles.doRotate}` : `${styles.dropArrow}`}
                src={downArrow} width="30" height="30"
                onClick={() => { }}
            > 
            </img>
            <Fade in={dropDown}>
                            <div className={styles.decriptionPanel}>
                                <fieldset>
                                    <legend>Relevent Coursework</legend>
                                    <div className={styles.coursesList} >
                                        <ul>
                                            {information[index].coursework.map((value, index) => (
                                                <li>
                                                    {value.course}
                                                    <i>
                                                        {value.language}
                                                    </i>
                                                </li>
                                            ))}
                                           
                                        </ul>
                                    </div>
                                </fieldset>
                            </div>
                        </Fade>
                        </div>
                        <div>
                         <img src={information[index].image} width="50" height="50" alt="mcgillIcon" />
                     </div>
                     <div >
                      <b>{information[index].title}</b> &#8213; <span>{information[index].description}</span> <br /> <i>{information[index].year}</i>
                    </div>

                    </React.Fragment>
    )
}

export default DropDown;

// <div className={styles.dropDownArrow}>
//                         <img className={topDropDown === true ? `${styles.dropArrow} ${styles.doRotate}` : `${styles.dropArrow}`}
//                             src={downArrow} width="30" height="30"
//                             onClick={() => { onClick('top') }}
//                         >
//                         </img>
//                         <Fade in={topDropDown}>
//                             <div className={styles.decriptionPanel}>
//                                 <fieldset>
//                                     <legend>Relevent Coursework</legend>
//                                     <div className={styles.coursesList} >
//                                         <ul>
//                                             <li>Introduction to Computer Science <i>(Java)</i></li>
//                                             <li>Software Systems <i>(C, Bash)</i></li>
//                                             <li>Matrix Numerical analysis <i>(MATLAB)</i></li>
//                                             <li>Discrete Mathematics</li>
//                                         </ul>
//                                     </div>
//                                 </fieldset>
//                             </div>
//                         </Fade>
//                     </div>
//                     <div>
//                         <img src={mcgillIcon} width="50" height="50" alt="mcgillIcon" />
//                     </div>
//                     <div >
//                         <b>McGill University</b> &#8213; <span>Major Physics and Computer Science </span> <br /> <i>[2021-current]</i>
//                     </div>