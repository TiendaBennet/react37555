
import {createContext, useState } from 'react'

export const CartContext = createContext()

const { Provider } = CartContext

function MyProvider({children}) {
    const [cart, setCart] = useState([])

    const isInCart = (sku) => {
        return cart.some(prod => prod.sku === sku) // some, indica si el producto ya existe en cart o no
    }

    const addItem = (item, cantidad) => { // agrega productos al carrito sin pisar existentes
        const newItem = {...item, cantidad}
        if (isInCart(newItem.sku)) {
            const findProduct =cart.find(prod => prod.sku === newItem.sku)
            const productIndex = cart.indexOf(findProduct) 
            const auxArray = [...cart]
            auxArray[productIndex].cantidad += cantidad
            setCart(auxArray)

        } else {
            setCart([...cart, newItem])
        }
    }
    const emptyCart  = () => {  
        return setCart([])  
    }
    const deleteItem  = (sku) => {   
        return setCart(cart.filter(prod => prod.sku !== sku))
    }
    const getItemQty  = () => {
        return cart.reduce((acc, x) => acc += x.cantidad, 0) //obtener la cantidad de unidades que tiene nuestro carrito, el cero es el valor inicial
    }
    const getItemPrice  = () => {
        return cart.reduce((acc, x) => acc += x.price * x.cantidad, 0)
    }
    
    return (
            <Provider value={{cart, isInCart, addItem, emptyCart, deleteItem, getItemPrice, getItemQty}}>
                {children}
            </Provider>
    )
}

export default MyProvider  