import logo from '../../assets/logocart.png';
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () => {

    const { totalQuantity } = useCart()

    return (
        <Link to={'/cart'} className='linkCartWidget'>
            <div className='cartWidget'>
                <img src={logo} alt="Cart Logo" style={{ width: '75%', height: '75%' }} />
                <p>{totalQuantity}</p>
            </div>
        </Link>
    );
};

export default CartWidget;
