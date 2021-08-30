// import styles from '../navbar/Navbar.module.css';
const styles = require('../navbar/Navbar.module.scss');

type Props = {
    name: String;
}
const NavbarComponent = ({ name }: Props) => {
    return (
        <div className={styles.component}>
            {name}
        </div>
    )
}

export default NavbarComponent;