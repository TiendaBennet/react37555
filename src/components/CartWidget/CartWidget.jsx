import './cartwidget.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";
import { useContext } from 'react' 
import { CartContext } from '../../context/CartContext'

function Cartwidget() {
    const { cart } = useContext(CartContext)

    return (
        <div className='cart-widget__container'>
            <div className='cart-widget__outer'>
                <div className='cart-widget__inner'>
                    <div className='cart-widget__image'>
                        <FontAwesomeIcon className="cartshopping" icon={ faCartShopping } />
                        <div className='cart-widget__counter'>
                            <h2>{cart.length}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cartwidget;