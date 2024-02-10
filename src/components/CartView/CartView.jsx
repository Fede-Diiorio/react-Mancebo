import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import styles from './CartView.module.css';
import CartItem from '../CartItem/CartItem';

const CartView = () => {
    const { cart, clearCart, totalQuantity, totalPrice } = useCart();

    if (totalQuantity === 0) {
        return (
            <section className={styles.cartViewContainer}>
                <h2>Su carrito está vacío</h2>
                <Link to={'/'}>
                    <button>Volver</button>
                </Link>
            </section>
        );
    }

    return (
        <section className={styles.cartViewContainer}>
            <h2>Carrito de Compras</h2>
            {cart.map((prod) => (
                <CartItem key={prod.id} {...prod} />
            ))}
            <div className={styles.cartViewInfo}>
                <button onClick={clearCart}>Vaciar Carrito</button>
                <Link to={'/checkout'}>
                    <button>Checkout</button>
                </Link>
                <h4>
                    <strong>Total: </strong>
                    {totalPrice}
                </h4>
            </div>
        </section>
    );
};

export default CartView;
