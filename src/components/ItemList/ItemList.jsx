import Item from "../Item/Item"
import './itemlist.css'

import Loader from '../Loader/Loader'

{/*el state y params lo pase a listcontainer*/}

function ItemList({isLoading,data}){

    return(
        <div className="item-list__inner">
            {isLoading && <Loader/>}
            {
            data.map((item)=> {
                return (
                    <Item
                        id={item.id}
                        key={item.id}
                        price={item.price}
                        title={item.title}
                        denominacion={item.denominacion}
                        img={item.img}
                        stock={item.stock}
                        />
                        )
                    }) 
                    }
                    
                </div>
            )
        }
        

export default ItemList