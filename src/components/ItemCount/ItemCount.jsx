import { useState } from "react";
import "./itemCount.css";
import Button from "../Button/Button";


function ItemCount({stock, onAddToCart}) {
  const [count, setCount] = useState(1);
  
function handleSubstract(){
    //no bajar de 0 
    if (count > 1) {setCount(count-1);
  }
}

function handleAdd(){
    //solo sumar si no supera el stock
    if (count < stock) {setCount(count+1);
  }
}

//function onAddToCart() {
  //let cenas = parseInt(price.innerText) + parseInt(count.value);
     
//}
// function handleCarrito al boton 

  return (
    <div className="itemcount_container">
      <div className="itemcount_control">
        <h4 class="subtitle">Cantidad</h4 >
            <div className="form quantityCounter">
              <Button onClick={handleSubstract}> - </Button>
              <span className="spancount">{count}</span>
              <Button onClick={handleAdd}> + </Button>
            </div>
            <div className="btnContainer">
              <button className="btn add" onClick={ () => { onAddToCart(count)}}>Agregar al Carrito</button> 
            </div>
      </div>  
    </div>
  );
}

export default ItemCount;