import React from "react"
import Button from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";
import "./../Products/card.css";
//import FlexWrapper from "../FlexWrapper/FlexWrapper";


function ItemDetail({course}) { 
   // let { img, title, descripcion, price, stock, sku } = course;
 
//Crear un estado para guardar el valor del item count
let estado = false;

function handleAddToCart(count){
    alert('agregaste al carrito! ${count}');
}

    return (
        //<FlexWrapper rows={true}>
        <div className="card">
            <div className="card-img">
                <img src={course.img} alt="card img"></img> 
            </div>
            <div className="card-detail">
                <h3>{course.title}</h3>
                <p>{course.descripcion}</p>
                <h4>$ {course.price}</h4>
                    <div className="buttoncard">
                    <Button text="Ver más"/>
                    </div>
            </div>
            <div>
            { estado === false? <ItemCount initial={course.initial} stock={course.stock} onAddToCart={handleAddToCart}/> : <button>Finalizar Compra</button>}
            </div>
        </div>
        //</FlexWrapper>
    );
}

export default ItemDetail;