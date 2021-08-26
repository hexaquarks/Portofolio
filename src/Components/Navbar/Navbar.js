import react from 'react';
import NavbarComponent from './NavbarComponent';
import styles from '../Navbar/Navbar.module.css';

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