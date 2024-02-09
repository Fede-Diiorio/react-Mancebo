import logo from '../../assets/logocart.png';
import { useCart } from '../../context/CartContext'

const CartWidget = ({ cart }) => {

    const { totalQuantity } = useCart()

    return (
        <div style={{ width: '30px', height: '30px' }}>
            <img src={logo} alt="Cart Logo" style={{ width: '75%', height: '75%' }} />
            {totalQuantity}
        </div>
    );
};

export default CartWidget;
