import AddToCart from './../AddToCart/AddToCart'
import './itemdetail.css'
import '../AddToCart/addtocart.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faTruckFast }  from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

function ItemDetail(props) {
    {/*Detalle de producto inicializado en 0 items*/}
    let [estadoItemDetail, setEstadoItemDetail] = useState(false) 
    let { addItem } = useContext(CartContext)
 
    function handleAddToCart(count){
        alert(`agregaste al ${count} items al carrito!`)
        setEstadoItemDetail(true)
        addItem(props, count)
    }

    return ( 
        <div className='item-detail__outer'>
            <div className="item-detail__inner">
                <div className="item-detail__title-container">
                    <h1 className='item-detail__title'>
                        {props.title}
                    </h1>
                </div>   
                <div className="item-detail__image-container">
                    <img className="item-detail__image" src={props.img} alt={props.title} />
                </div>
                <div className="item-detail__detail-container">
                    <p className='descripcion'>
                        {props.descripcion}
                    </p>
                </div>
                <div className="item-detail__sales-data">
                    <h2 className='item-detail__price'>${props.price}</h2>
                    <p className='item-detail__envios-p'>Todas las tarjetas disponibles.</p>
                    <div>
                        <FontAwesomeIcon className="cartshopping" icon={ faCreditCard } />                  
                    </div>
                    <p className='item-detail__envios-p'>Las compras realizadas con entrega o despacho deberán coordinarse previamente </p>
                    <div>
                        <FontAwesomeIcon className="cartshopping" icon={ faTruckFast } />
                    </div>
                    {/*Mostrar el contador si falso*/}
                    <div className='item-detail__itemcount'>
                        {estadoItemDetail === false ? <AddToCart stock={props.stock} onAddToCart={handleAddToCart} initial="1"/> : <Link to="/cart" ><button className='item-count__btn-add'> Finalizar compra </button></Link>}
                    </div>
                </div>
            </div>
            <div className='item-detail__extra-detail'>
                <div>
                    {(props.descripcion) === "" ? " " : <h3>Descripción: </h3> }
                    <p className='item-detail__detail-p'>{(props.descripcion) === "" ? " " : props.descripcion }</p> 
                </div>
            </div>
        </div> 
    )
}

export default ItemDetail