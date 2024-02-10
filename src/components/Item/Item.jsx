import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ id, name, img, category, price, stock }) => {
    return (
        <article className='item'>
            <h3>{name}</h3>
            <img src={img} className='img' />
            <div className='stockPrice'>
                <p><strong>Precio: </strong>U$s {price}</p>
                <p><strong>Stock: </strong>{stock}</p>
            </div>
            <Link to={`/detail/${id}`} className='boton'>Ver detalle</Link>
        </article>
    )
}

export default Item