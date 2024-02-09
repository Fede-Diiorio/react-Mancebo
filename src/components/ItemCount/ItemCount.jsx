import { useState } from "react";
import './ItemCount.css';

const ItemCount = ({ initial = 1, stock, onAdd }) => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < stock) {
            setCount((prev) => prev + 1);
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount((prev) => prev - 1);
        }
    };

    return (
        <div className="item-count-container">
            <h3>{count}</h3>
            <button className="count-button" onClick={decrement}>
                -
            </button>
            <button className="add-to-cart-button" onClick={() => onAdd(count)}>
                Agregar al carrito
            </button>
            <button className="count-button" onClick={increment}>
                +
            </button>
        </div>
    );
};

export default ItemCount;
