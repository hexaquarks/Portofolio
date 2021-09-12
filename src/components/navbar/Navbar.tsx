import NavbarComponent from '../navbar/NavbarComponent';

import linkedinIcon from '../../assets/linkedinIcon.png';
import githubIcon from '../../assets/githubOrange.png';

const styles = require('../navbar/Navbar.module.scss');

const Navbar = () => {
    const props = [
        { name: 'Home', targetName: 'homeDiv' },
        { name: 'About', targetName: 'aboutDiv' },
        { name: 'Projects', targetName: 'projectsDiv' },
        { name: 'Extras', targetName: 'extrasDiv' },
        { name: 'Contact', targetName: 'contactDiv' }
    ]

    return (
        <div className={styles.navbar}>
            <div className={styles.icons}>
                <a href="https://www.linkedin.com/in/mihail-anghelici-85196a20a/" target="_blank">
                    <img src={linkedinIcon} width="30" height="30" />
                </a>
                <a href="https://github.com/hexaquarks" target="_blank">
                    <img src={githubIcon} width="30" height="30"
                        style={{ marginLeft: '10px' }} />                
                </a>
            </div>
            {props.map((value, index) => (
                <NavbarComponent
                    name={value.name}
                    targetName={value.targetName}
                    key={index} />
            ))}
        </div>
    );
}

export default Navbar;