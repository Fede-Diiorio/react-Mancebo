import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom"
import './CartView.css'
import CartItem from "../CartItem/CartItem"

const CartView = () => {
    const { cart, clearCart, totalQuantity, totalPrice } = useCart()

    if (totalQuantity === 0) {
        return (
            <section className="cartViewContainer">
                <h2>Su carrito está vacio</h2>
                <Link to={'/'}><buton>Volver</buton></Link>
            </section>
        )
    }
    return (
        <section className="cartViewContainer">
            <h2>Carrito de Compras</h2>
            <div>
                {cart.map(prod => <CartItem key={prod.id} {...prod} />)}
            </div>
        </section>
    )
}

export default CartView