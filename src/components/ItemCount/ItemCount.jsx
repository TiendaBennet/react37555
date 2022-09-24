import { useState } from "react";
import "./itemCount.css";


function ItemCount(props) {
  const [count, setCount] = useState(props.initial);
  
function handleSubstract(){
    //no bajar de 0 
    if (count > props.initial) {setCount(count-1);
  }
}

function handleAdd(){
    //solo sumar si no supera el stock
    if (count < props.stock) {setCount(count+1);
  }
}

//function onAddToCart() {
  //let cenas = parseInt(price.innerText) + parseInt(count.value);
     
//}
// function handleCarrito al boton 

  return (
    <div className="quantity">
        <h4 class="subtitle">Cantidad</h4>
            <div className="form quantityCounter">
              <button onClick={handleSubstract}> - </button>
              <span className="spancount">{count}</span>
              <button onClick={handleAdd}> + </button>
            </div>
            <div className="btnContainer">
              <button className="btn add">Agregar al Carrito</button>
            </div>  
    </div>
  );
}

export default ItemCount;