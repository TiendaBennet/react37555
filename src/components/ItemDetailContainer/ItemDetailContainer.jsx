import React, { useState, useEffect } from 'react'
import './itemdetailcontainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getSingleItem } from '../../services/mockAPI'
import {useParams} from 'react-router-dom'


function ItemDetailContainer() {
    let [data, setData] = useState({}); 
    const params = useParams()
    const sku = params.sku
    useEffect(() => {
        getSingleItem(sku).then((respuestaDatos) => setData(respuestaDatos))
    }, [sku]) 


    return (
        <div className='item-detail__container'>
            <ItemDetail
                sku={data.sku}
                title={data.title}
                denominacion={data.denominacion}
                img={data.img}
                stock={data.stock}
                price={data.price}
                descripcion={data.descripcion}
                />
        </div> 
    )
}
export default ItemDetailContainer