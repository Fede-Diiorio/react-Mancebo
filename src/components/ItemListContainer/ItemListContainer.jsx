import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import './ItemListContainer.css';
import { db } from "../../services/firebase/firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore"

const ItemListContainer = ({ greeting }) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const { categoryId } = useParams();

    // useEffect(() => {
    //     const asyncFunction = categoryId ? getProductsByCategory : getProducts;

    //     asyncFunction(categoryId)
    //         .then(products => {
    //             setProducts(products);
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         })
    //         .finally(() => {
    //             setLoading(false);
    //         });
    // }, [categoryId]);

    useEffect(() => {
        setLoading(true)

        const productsCollection = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        getDocs(productsCollection)
            .then(querySnapshot => {
                const productsAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data()
                    return { id: doc.id, ...fields }
                })

                setProducts(productsAdapted)
            })
            .catch(error => {
                showNotification('error', 'Hubo un error')
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])

    if (loading) {
        return (
            <div className="loading-container">
                <h1 className="loading-text">Cargando Comics... 😊</h1>
            </div>
        );
    }

    return (
        <div className="container">
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer;
