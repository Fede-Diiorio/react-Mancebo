import logo from '../../assets/logocart.png';

const CartWidget = ({ cart }) => {

    const totalQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity
        })

        return accu
    }

    return (
        <div style={{ width: '30px', height: '30px' }}>
            <img src={logo} alt="Cart Logo" style={{ width: '75%', height: '75%' }} />
            {totalQuantity()}
        </div>
    );
};

export default CartWidget;
