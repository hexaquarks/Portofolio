// import styles from '../navbar/Navbar.module.css';
import Scroll, { Link }  from 'react-scroll'
const styles = require('../navbar/Navbar.module.scss');
const ScrollLink = Scroll.ScrollLink

const NavbarComponent = (props:any) => {
    const {name, targetName , index} = props;
    return (
        <div className={styles.component}>
            <Link
                // href={targetName}
                to={targetName}
                activeClass="active"
                className="nav-link"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
            >
                  {name}
            </Link>
        </div>
    )
}

export default NavbarComponent;