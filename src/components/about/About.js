import styles from '../about/About.module.css';

const About = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.leftParagraph}>
                <h2>
                    Work
                </h2>
                <hr />
                <p>
                Pariatur laborum enim velit incididunt magna adipisicing adipisicing aute ut. Officia aliquip sint duis occaecat commodo aliquip. Irure laborum dolore ex excepteur fugiat aliqua et fugiat cupidatat id qui. Ad aute labore voluptate voluptate minim nostrud officia irure consectetur velit quis laborum.
                </p>
            </div> 
            <div className={styles.rightParagraph}>
                <h2>
                    Personal
                </h2> 
                <hr />              
                <p>
                    Pariatur laborum enim velit incididunt magna adipisicing adipisicing aute ut. Officia aliquip sint duis occaecat commodo aliquip. Irure laborum dolore ex excepteur fugiat aliqua et fugiat cupidatat id qui. Ad aute labore voluptate voluptate minim nostrud officia irure consectetur velit quis laborum.
                </p>
            </div> 
        </div>
    );
}

export default About;