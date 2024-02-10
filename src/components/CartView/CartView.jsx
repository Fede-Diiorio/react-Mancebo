import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartView = () => {
    const { cart, clearCart, totalQuantity, totalPrice } = useCart()

    if (totalQuantity === 0) {
        return (
            <section>
                <h2>Su carrito está vacio</h2>
                <Link to={'/'}><buton>Volver</buton></Link>
            </section>
        )
    }
    return (
        <section>
            <h2>Carrito de Compras</h2>
        </section>
    )
}

export default CartView