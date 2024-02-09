import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css'; // Importa el archivo de estilos CSS

const ItemDetailContainer = ( setCart ) => {
    const [product, setProduct] = useState(null);

    const { productId } = useParams();

    useEffect(() => {
        getProductById(productId)
            .then(product => {
                setProduct(product);
            });
    }, [productId]);

    return (
        <div className="item-detail-container">
            <h1>Detalle del Comic</h1>
            <ItemDetail {...product} setCart={setCart}/>
        </div>
    );
}

export default ItemDetailContainer;
