import { useState } from 'react'
import { useNotification } from '../../notification/NotificationService'

const OrderForm = ({ onCreate }) => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const { showNotification } = useNotification()
    const [formSubmitted, setFormSubmitted] = useState(false)


    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setFormSubmitted(true)

        if (!name || !phone || !email) {
            showNotification('error', 'Debe completar todos los campos')
            return
        }

        const userData = {
            name,
            phone,
            email,
        };

        onCreate(userData)
    }



    return (
        <form className='form'>
            <legend>Complete los campos para generar la orden</legend>
            <div className='fromCampo'>
                <label>Nombre:</label>
                <input type="text" placeholder="Tu Nombre" value={name} onChange={handleNameChange} />
            </div>

            <div className='fromCampo'>
                <label>Teléfono:</label>
                <input type="tel" pattern="[0-9]*" placeholder="Tu Teléfono" value={phone} onChange={handlePhoneChange} />
            </div>

            <div className='fromCampo'>
                <label>E-mail:</label>
                <input type="email" placeholder="Tu E-mail" value={email} onChange={handleEmailChange} />
            </div>

            <input type="submit" value='Generar Orden' />
        </form>
    )
}

export default OrderForm