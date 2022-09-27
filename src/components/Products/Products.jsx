import React, { useState, useEffect } from "react";
import FlexWrapper from '../FlexWrapper/FlexWrapper';
import Item from "./Item";
import getItems from '../../services/mockAPI';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from "./ItemList";

function Products() {
  let [data, setData] = useState([]); 

useEffect (
  () => {
  getItems().then((respuestaDatos) => setData(respuestaDatos)); //se pide una vez los datos, y los seteamos una vez
  },
  []
  ); 

//function Products(props) {
//  return (
//    <div>
//        <h1>{props.greeting}</h1>
//        <div className='main container' id='idcard'>
 //           <Card title="Blanco" price={800} stock={3} initial={1} img="https://tiendabennet.com.ar/wp-content/uploads/2022/03/Blanco-resize-scaled.jpg"/> 
//            <Card title="Fresno" price={900} stock={3} initial={1} img="https://tiendabennet.com.ar/wp-content/uploads/2022/03/Fresno-resize-scaled.jpg"/>
//            <Card title="Nogal" price={900} stock={3} initial={1} img="https://tiendabennet.com.ar/wp-content/uploads/2022/03/Nogal-resize-scaled.jpg"/>
 //       </div>
//        <FlexWrapper />
//    </div>
//  );
//}

  return (
    <div>
      <div className='main container'>
        <ItemList data={data} />
      </div>
    </div>
);
}  


export default Products; 