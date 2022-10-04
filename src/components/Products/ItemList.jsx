import React from 'react'
import Item from "./Item";

//   ItemList.js 
//   Es un agrupador de un set de componentes Item.js 

//map de datos 
function ItemList(props) { //que reciba las props
  return (
    <div>
        {props.data.map((item)=> {        
            return (
                <Item
                    key={item.sku} //necesario para ordenar a React.
                    sku={item.sku} 
                    img={item.img}
                    title={item.title}
                    descripcion={item.descripcion}
                    price={item.price}
                    stock={item.stock}
                />
            );  
        })}
    </div>
  )
}

export default ItemList