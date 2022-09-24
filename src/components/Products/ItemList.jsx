import React from 'react'
import Card from "./Card";


function ItemList(props) {
  return (
    <div>
        {props.data.map((item)=> {        
            return (
                <Card
                    key={item.sku} //necesario para ordenar a React. 
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