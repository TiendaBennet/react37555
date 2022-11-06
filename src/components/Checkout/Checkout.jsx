import { useState, useContext  } from 'react'
import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'
import { createBuyOrder } from '../../services/firestore'
import {Link} from 'react-router-dom'

import './checkout.css'

function Checkout(){
    const [dataForm, setDataForm] = useState({name:"",dni:"", phone:"", email:""})
    const { cart, getItemPrice, getOrderId } = useContext(CartContext)
    const navigate = useNavigate()
    
    function inputChangeHandler(event) {
        let inputName = event.target.name
        let value = event.target.value

        const newDataForm = {...dataForm}
        newDataForm[inputName] = value
        setDataForm(newDataForm)
    } 

    function handleCheckout(event) {
        event.preventDefault()
        const orderData = {
            buyer: dataForm,
            items: cart,
            date: new Date(),
            total: getItemPrice()
        }
        console.log(orderData)
        createBuyOrder(orderData).then( orderid => {
            getOrderId(orderid)
            navigate(`/checkout/${orderid}`)
        })
        .catch((error) => {
            console.log(error);
          })
    }
    return (
        <div className='checkout__container'>
        <div className="form__container">
            <form onSubmit={handleCheckout} className="form">
                <for className="form__item">
                    <label>
                        <h4>Nombre :</h4>
                    </label>
                    <input 
                        value={dataForm.name}
                        onChange={inputChangeHandler}
                        name="name"
                        type="text"
                        placeholder='  nombre'
                        required 
                    />
                </for>
                <for className="form__item">
                    <label>
                        <h4>Dni/Cuit :</h4>
                    </label>
                    <input 
                        value={dataForm.dni}
                        onChange={inputChangeHandler}
                        name="dni"
                        type="text"
                        placeholder='  cuit'
                        required 
                    />
                </for>
                <div className="form__item">
                    <label>
                        <h4>Teléfono :</h4>
                    </label>
                    <input 
                        value={dataForm.phone}
                        onChange={inputChangeHandler}
                        name="phone"
                        type="text"
                        placeholder='  teléfono'
                        required 
                    />
                </div>
                <div className="form__item">
                    <label>
                        <h4>E-mail :</h4>
                    </label>
                    <input 
                        value={dataForm.email}
                        onChange={inputChangeHandler}
                        name="email"
                        type="text"
                        placeholder='  email'
                        required 
                    />
                </div>
                <div className='form__btn-container'>
                    <button type="submit" onClick={handleCheckout} className='btn'><h4>Finalizar Compra</h4></button>
                </div>
                
            </form>
        </div>
    </div>
)
}

export function CheckoutID() {
    const {orderId } = useContext(CartContext)
    return (
        <div>
            <h4>¡Gracias por su compra! Su número de orden es: {orderId}</h4>
            <br />
            <Link to="/"><button>Seguir comprando</button></Link>
        </div>
        
    );
}

export default Checkout