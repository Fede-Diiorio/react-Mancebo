import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ id, name, img, category, price, description, stock, setCart }) => {

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id,
            name,
            quantity,
            price
        };
        console.log('Agregado correctamente:', objProductToAdd);
        
        // Utiliza setCart para agregar objProductToAdd al carrito
        setCart(prev => [...prev, objProductToAdd]);
    };

    return (
        <article className="item-detail-container">
            <h3 className="highlighted-text">{name}</h3>
            <img src={img} alt={name} className="item-image" />
            <p>Categoria: {category}</p>
            <h4>U$s{price}</h4>
            <p>Descripcion: {description}</p>
            {/* Pasa la función handleOnAdd como prop a ItemCount */}
            <ItemCount stock={stock} onAdd={handleOnAdd} />
        </article>
    );
}

export default ItemDetail;

