import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase/firebaseConfig";
import { doc, getDoc } from 'firebase/firestore'
import styles from './ItemDetailContainer.module.css';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true)

    const { productId } = useParams();

    useEffect(() => {
        setLoading(true)

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
                setLoading(false)
            })
    }, [productId])

    if (loading) {
        return <h1 className={styles.loadingText}>Cargando...</h1>
    }

    return (
        <div className={styles.itemDetailContainer}>
            <h1 className={styles.detailHeader}>Detalle del Comic</h1>
            <ItemDetail {...product} />
        </div>
    );
}

export default ItemDetailContainer;
