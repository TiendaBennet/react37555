import React from 'react';
import FlexWrapper from '../FlexWrapper/FlexWrapper';
import Card from "./Card";

function Products(props) {
  return (
    <div>
        <h1>{props.greeting}</h1>
        <div className='main container' id='idcard'>
            <Card title="Blanco" price={800} stock={3} initial={1} img="https://tiendabennet.com.ar/wp-content/uploads/2022/03/Blanco-resize-scaled.jpg"/> 
            <Card title="Fresno" price={900} stock={3} initial={1} img="https://tiendabennet.com.ar/wp-content/uploads/2022/03/Fresno-resize-scaled.jpg"/>
            <Card title="Nogal" price={900} stock={3} initial={1} img="https://tiendabennet.com.ar/wp-content/uploads/2022/03/Nogal-resize-scaled.jpg"/>
        </div>
        <FlexWrapper />
    </div>
  );
}

export default Products; 