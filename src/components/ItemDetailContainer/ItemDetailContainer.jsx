import React, { useState, useEffect } from "react";
import getSingleItem from '../../services/mockAPI';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom'; //hookeamos para que nos traiga los parámetros de la url

function ItemDetailContainer() {
    let [data, setData] = useState([]); 

const params = useParams();    //que me devuelva un objeto donde tendrá adentro al id
const sku = params.sku;           // lo guardamos en una variable, dentro de la prop ".id"       
//=> Con destracturing: const {id} = useParams();


  useEffect (
    () => {
    getSingleItem(sku).then((respuestaDatos) => setData(respuestaDatos)); 
    }, [] ); 

// Para function getSingleItem( idItem), como es por id, seleccionas el articulo que vos queres:     
// getSingleItem(1).then((respuestaDatos) => setData(respuestaDatos));  => se agrega el 0


return (
  <div>
    <div className='main container'>
      <ItemDetail data={data} />
    </div>
  </div>
);
}  
export default ItemDetailContainer;