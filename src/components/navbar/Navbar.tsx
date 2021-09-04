import react from 'react';
import NavbarComponent from '../navbar/NavbarComponent';

const styles = require('../navbar/Navbar.module.scss');

const Navbar = () => {

    return (
        <div className={styles.navbar}>
            <NavbarComponent name='Home' />
            <NavbarComponent name='Projects' />
            <NavbarComponent name='About Me' />
            <NavbarComponent name='Contact' />
        </div>
    );
}

export default Navbar;