import React from "react"
import Button from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";
import "./card.css";

// ITEM.js :
// Es un componente destinado a mostrar información breve del producto
// que el user clickeará luego para acceder a los detalles.
// Antes se llamaba Card, referenciando a la tarjeta del producto

function Item(props) {
    let { img, title, descripcion, price, stock } = props;
    return (
        <div className="card">
            <div className="card-img">
                <img src={props.img} alt="card img"></img> 
            </div>
            <div className="card-detail">
                <h3>{props.title}</h3>
                <p>{props.descripcion}</p>
                <h4>$ {props.price}</h4>
                <div className="buttoncard">
                <Button text="Ver más"/>
                </div>
            </div>
            <div>
            <ItemCount initial={props.initial} stock={props.stock}/>
            </div>
        </div>
    );
}

export default Item;