import styles from '../navbar/Navbar.module.css';

const NavbarComponent = ({ name }) => {
    return (
        <div className={styles.component}>
            {name}
        </div>
    )
}

export default NavbarComponent;