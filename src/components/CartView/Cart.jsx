import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './cart.css'
import {Link} from 'react-router-dom'
function Cart() {
    const { cart, deleteItem,  getItemPrice} = useContext(CartContext)
    console.log(cart)
    return (
        <div className='cart__container'>
            <div className='cart__inner'>
                
                <div className='cart__itemlist-container'>
                    <div className='cart__item-container'>
                        <div className="cart__image-box">
                            
                        </div>
                        <div className="cart__name-box">
                            <h3 className="nombre--producto">Nombre</h3>
                        </div>
                        <div className="cart__quantity-box">
                            <p>Cantidad</p>
                        </div>
                        <div className="cart__price-box">
                            <p>Precio</p>
                        </div>
                        <div className="cart__remove">
                            
                        </div>
                    </div>
                    { (cart.length === 0) ? <h2>Carrito vacío</h2> :
                        cart.map((item) => {
                            return (
                                <div className='cart__item-container' key={item.id}>
                                    <div className="cart__image-box">
                                        <img src={item.img} width='45rem' alt='item'></img>
                                    </div>
                                    <div className="cart__name-box">
                                        <h3 className="nombre--producto">{item.title}</h3>
                                    </div>
                                    <div className="cart__quantity-box">
                                           <p>{item.cantidad}</p>
                                    </div>
                                    <div className="cart__price-box">
                                        <p>${(item.price * item.cantidad).toLocaleString()}</p>
                                    </div>
                                    <div className="cart__remove">
                                        <button className="btn btn--quitar--producto"  onClick={() => deleteItem(item.id)}>Quitar producto</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                { (cart.length === 0) ? 
                    <div className='cart__checkout-container'>
                        <div className='cart__goback-container'>
                            <Link to="/"><button>Regresar a la tienda</button></Link>
                        </div>
                    </div> :
                    <div className='cart__checkout-container'>
                        <div className='cart__checkout-total'>
                            <h2>Subtotal:</h2>
                            <h3>{getItemPrice()}</h3>
                            <h2>Total (más envío):</h2>
                            <h2>{getItemPrice() + 2000}</h2>
                        </div>
                        <div className='cart__btns'>
                            
                            <div className='cart__goback-container'>
                                <Link to="/"><button>Regresar a la tienda</button></Link>
                            </div>
                            <Link to="/checkout">
                                <button>Terminar mi compra</button>  
                            </Link>  
                            <button>Terminar mi compra</button>  
                        </div>  
                    </div>
                }
            </div>

        </div>
    )
}

export default Cart