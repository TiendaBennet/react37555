import React from "react"
import Button from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";
import "./card.css";

function Card(props) {
    return (
        <div className="card">
            <div className="card-img">
                <img src={props.img} alt="card img"></img> 
            </div>
            <div className="card-detail">
                <h3>{props.title}</h3>
                <p>Tabla Revestimiento PVC por 250mm de ancho. Precio por ml.</p>
                <h4>$ {props.price}</h4>
                <Button text="Ver más"/>
            </div>
            <ItemCount />
        </div>
    );
}

export default Card;