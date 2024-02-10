import { useEffect, useState } from 'react'
import { db } from '../../services/firebase/firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import { useNotification } from '../../notification/NotificationService'
import { Link } from 'react-router-dom'
import styles from './OrderView.module.css'

const OrderView = ({ orderSnapshot }) => {
    const [buyer, setBuyer] = useState(null)
    const [item, setItem] = useState(null)
    const [total, setTotal] = useState(null)
    const { showNotification } = useNotification()
    const [orderId, setOrderId] = useState(null)

    useEffect(() => {
        const orderId = orderSnapshot.id
        setOrderId(orderId)

        const fetchData = async () => {
            try {
                const orderRef = doc(db, 'orders', orderId)
                const orderDoc = await getDoc(orderRef)

                if (orderDoc.exists()) {
                    const orderData = orderDoc.data()
                    setBuyer(orderData.buyer)
                    setItem(orderData.item)
                    setTotal(orderData.total)
                } else {
                    showNotification('error', 'La orden no existe')
                }
            } catch (error) {
                showNotification('error', 'Error al obtener la información de la orden')
            }
        }

        fetchData()
    }, [orderSnapshot, showNotification])

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <h2>¡Gracias por comprar con nosotros!</h2>
                <p className={styles.order}>
                    el ID de su compra es: <strong>{orderId}</strong>
                </p>
                <div className={styles.data}>
                    {buyer && (
                        <div className={styles.buyer}>
                            <h3>Datos del Comprador:</h3>
                            <p>Nombre: {buyer.name}</p>
                            <p>Teléfono: {buyer.phone}</p>
                            <p>Email: {buyer.email}</p>
                        </div>
                    )}
                    {item && (
                        <div className={styles.item}>
                            <h3>Detalles de la Compra:</h3>
                            <ul>
                                {item.map((product) => (
                                    <li key={product.id}>
                                        Producto: {product.name}, Cantidad: {product.quantity}
                                    </li>
                                ))}
                                {total && <p className={styles.total}>Total de la compra: U$s {total}</p>}

                            </ul>
                        </div>
                    )}
                </div>
                <p>Pronto nos comunicaremos con usted</p>
                <Link to={'/'}><button className={styles.button}>Volver al inicio</button></Link>
            </div>
        </div>
    )
}

export default OrderView