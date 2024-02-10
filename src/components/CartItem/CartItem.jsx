import React from 'react';
import { useCart } from '../../context/CartContext';
import { useNotification } from '../../notification/NotificationService';
import styles from './CartItem.module.css';

const CartItem = ({ name, price, quantity, id }) => {
    const { showNotification } = useNotification();
    const { removeItem } = useCart();

    const handleRemoveItem = () => {
        removeItem(id);
        showNotification('success', 'Eliminado correctamente');
    };

    return (
        <div className={styles.cartItem}>
            <h3>{name}</h3>
            <p><strong>Precio Unitario: </strong>{price}</p>
            <p><strong>Cantidad de Unidades: </strong>{quantity}</p>
            <p><strong>Subtotal: </strong>{price * quantity}</p>
            <button onClick={handleRemoveItem}>X</button>
        </div>
    );
};

export default CartItem;
