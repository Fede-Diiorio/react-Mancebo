import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import styles from './NavBar.module.css';
const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <Link to={'/'} className={styles.link}><h1>ComicShop</h1></Link>
                <section className={styles.navLinks}>
                    <Link to={'/category/Dc Comics'}>Dc Comics</Link>
                    <Link to={'/category/Marvel Comics'}>Marvel Comics</Link>
                </section>
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;
