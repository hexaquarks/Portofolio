import react from 'react';
import NavbarComponent from '../navbar/NavbarComponent';

const styles = require('../navbar/Navbar.module.scss');

const Navbar = () => {
    const props = [
        {name: 'Home' , targetName: 'homeDiv'},
        {name: 'About' , targetName: 'aboutDiv'},
        {name: 'Projects' , targetName: 'projectsDiv'},
        {name: 'Extras' , targetName: 'extrasDiv'},
        {name: 'Contact' , targetName: 'contactDiv'}
    ]

    return (
        <div className={styles.navbar}>
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