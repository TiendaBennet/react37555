import React, { useState, useEffect } from 'react'
import './itemdetailcontainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getSingleItem } from '../../services/firestore'
import {useParams} from 'react-router-dom'
import Loader from '../Loader/Loader'


function ItemDetailContainer() {
    const [data, setData] = useState({}); 
    
        {/*un estado para el error*/}
    const [error, setError] = useState(false) 
    const params = useParams()
    const id = params.id
    {/* Si esta promesa no se resuelve, porque por ej no se encuentra el id, no se cumple la función*/}
    useEffect(() => {
        getSingleItem(id)
            .then((respuestaDatos) => setData(respuestaDatos))
            .catch((errormsg) => setError(errormsg.message))
    }, [id]) 

    {/*Return Temprano - Si esta funcion se da, la próxima (ItemDetail) no, se corta. Entonces, si no hay data title entonces loader*/}
    if (!data.title) { 
        return (
        <div>
            {error ? <h2>{error}</h2> : <Loader/>}
        </div>
        ) 
    }

    {/*Si llegan los datos del useEffect, el (!data.title) no se cumple, por ende pasamos a lo siguiente */}
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