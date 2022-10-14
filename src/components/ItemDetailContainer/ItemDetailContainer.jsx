import React, { useState, useEffect } from 'react'
import './itemdetailcontainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getSingleItem } from '../../services/firestore'
import {useParams} from 'react-router-dom'
import Loader from '../Loader/Loader'


function ItemDetailContainer() {
    const [data, setData] = useState({}); 
    const [error, setError] = useState(false)
    const params = useParams()
    const id = params.id
    useEffect(() => {
        getSingleItem(id)
            .then((respuestaDatos) => setData(respuestaDatos))
            .catch((errormsg) => setError(errormsg.message))
    }, [id]) 

    if (!data.title) { 
        return (
        <div>
            {error ? <h2>{error}</h2> : <Loader/>}
        </div>
        ) 
    }

    return (
        <>
            <div className='item-detail__container'>
            <ItemDetail
                id={data.id}
                title={data.title}
                denominacion={data.denominacion}
                img={data.img}
                stock={data.stock}
                price={data.price}
                descripcion={data.descripcion}
                categoria={data.categoria}
                intracategoria={data.intracategoria}
                />
        </div>
        </> 
    )
}
export default ItemDetailContainer