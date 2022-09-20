import { useState } from "react";
import "./itemCount.css";


function ItemCount(props) {
  const [count, setCount] = useState(props.initial);
  
function handleSubstract(){
    //no bajar de 0 
    if (count > 0) {setCount(count-1);
  }
}

function handleAdd(){
    //solo sumar si no supera el stock
    if (count < props.stock) {setCount(count+1); 
  }
}

// function onAddToCart() {
    //funcion
    //let Total = 0;
     
//}

  return (
    <div>
        <div>
            <button onClick={handleSubstract}> - </button>
            <span>{count}</span>
            <button onClick={handleAdd}> + </button>
        </div>
        <button>Agregar al Carrito</button>
    </div>
  );
}

export default ItemCount;