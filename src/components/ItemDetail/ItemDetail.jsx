import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { useCart } from '../../context/CartContext';
import { useNotification } from '../../notification/NotificationService';

const ItemDetail = ({ id, name, img, category, price, description, stock }) => {

    const { addItem, getProductQuantity } = useCart()
    const { showNotification } = useNotification()

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id,
            name,
            quantity,
            price,
            img
        };
        addItem(objProductToAdd)
        console.log(objProductToAdd)
        showNotification('success', `Agregado ${quantity} de ${name}`)
    };

    const productQuantity = getProductQuantity(id)

    return (
        <article className="item-detail-container">
            <h3 className="highlighted-text">{name}</h3>
            <img src={img} alt={name} className="item-image" />
            <p>Categoria: {category}</p>
            <h4>U$s{price}</h4>
            <p>Descripcion: {description}</p>
            {
                <ItemCount stock={stock} onAdd={handleOnAdd} initial={productQuantity} />
            }
        </article>
    );
}

export default ItemDetail;

