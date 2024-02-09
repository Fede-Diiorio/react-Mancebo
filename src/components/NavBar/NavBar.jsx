import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to={'/'} className="nav-h1"><h1>ComicShop</h1></Link>
            <section className="nav-links">
                <Link to={'/category/Dc Comics'}>Dc Comics</Link>
                <Link to={'/category/Marvel Comics'}>Marvel Comics</Link>
            </section>
            <CartWidget />
        </nav>
    );
};

export default NavBar;
