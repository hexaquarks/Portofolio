import styles from '../Navbar/Navbar.module.css';

const NavbarComponent = ({ name }) => {
    return (
        <div className={styles.component}>
            {name}
        </div>
    )
}

export default NavbarComponent;