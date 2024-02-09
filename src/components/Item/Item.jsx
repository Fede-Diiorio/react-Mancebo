import { Link } from 'react-router-dom'

const Item = ({ id, name, img, category, price }) => {
    return (
        <article>
            <h3>{name}</h3>
            <img src={img} style={{width:150}}/>
            <p>categoria: {category}</p>
            <h4>U$s{price}</h4>
            <Link to={`/detail/${id}`}>Ver detalle</Link>
        </article>
    )
}

export default Item