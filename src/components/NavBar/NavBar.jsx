import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'; 

const NavBar = ({ cart }) => {
    return (
        <nav className="navbar">
            <h1>ComicShop</h1>
            <section className="nav-links">
                <Link to={'/category/Dc Comics'}>Dc Comics</Link>
                <Link to={'/category/Marvel Comics'}>Marvel Comics</Link>
            </section>
            <CartWidget cart={cart} />
        </nav>
    );
};

export default NavBar;
