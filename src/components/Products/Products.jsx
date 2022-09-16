import React from 'react';
import Card from "./Card";

function Products() {
  return (
    <div>
        <h1>Revestimientos</h1>
        <div className='main container' id='idcard'>
            <Card title="Blanco" price={800} img="https://tiendabennet.com.ar/wp-content/uploads/2022/03/Blanco-resize-scaled.jpg"/> 
            <Card title="Fresno" price={900} img="https://tiendabennet.com.ar/wp-content/uploads/2022/03/Fresno-resize-scaled.jpg"/>
            <Card title="Nogal" price={900} img="https://tiendabennet.com.ar/wp-content/uploads/2022/03/Nogal-resize-scaled.jpg"/>
        </div>
    </div>
  );
}

export default Products; 