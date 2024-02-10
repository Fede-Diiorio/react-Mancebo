import { useState } from "react";
import './ItemCount.css';

const ItemCount = ({ initial = 1, stock, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        };
    };

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        };
    };

    return (
        <div className="item-count-container">
            <h3>{quantity}</h3>
            <button className="count-button" onClick={decrement}>
                -
            </button>
            <button className="add-to-cart-button" onClick={() => onAdd(quantity)} disabled={!stock}>
                Agregar al carrito
            </button>
            <button className="count-button" onClick={increment}>
                +
            </button>
        </div>
    );
};

export default ItemCount;
