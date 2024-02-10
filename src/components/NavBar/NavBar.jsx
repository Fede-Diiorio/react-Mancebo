import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import styles from './NavBar.module.css';
import { useCart } from "../../context/CartContext";

const NavBar = () => {
    const { totalQuantity } = useCart()
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <Link to={'/'} className={styles.link}><h1>ComicShop</h1></Link>
                {totalQuantity > 0 ? <CartWidget /> : null}
                <section className={styles.navLinks}>
                    <Link to={'/category/Dc Comics'}>Dc Comics</Link>
                    <Link to={'/category/Marvel Comics'}>Marvel Comics</Link>
                </section>
            </div>
        </nav>
    );
};

export default NavBar;
