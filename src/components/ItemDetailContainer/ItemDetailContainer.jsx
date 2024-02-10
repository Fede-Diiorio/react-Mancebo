import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase/firebaseConfig";
import { doc, getDoc } from 'firebase/firestore'
import './ItemDetailContainer.css'; // Importa el archivo de estilos CSS

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoadign] = useState(true)

    const { productId } = useParams();


    useEffect(() => {
        setLoadign(true)

        const productDocument = doc(db, 'products', productId)

        getDoc(productDocument)
            .then(queryDocumentSnapshot => {
                const fields = queryDocumentSnapshot.data()
                const productAdapted = { id: queryDocumentSnapshot.id, ...fields }
                setProduct(productAdapted)
            })
            .catch(error => {
                showNotification('error', 'Hubo un error')
            })
            .finally(() => {
                setLoadign(false)
            })
    }, [productId])


    return (
        <div className="item-detail-container">
            <h1>Detalle del Comic</h1>
            <ItemDetail {...product} />
        </div>
    );
}

export default ItemDetailContainer;
