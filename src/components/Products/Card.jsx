import React from "react"
import "./card.css";

function Card(props) {
    return (
        <div className="card">
            <div className="card-img">
                <img src={props.img} alt="card img"></img> 
            </div>
            <div className="card-detail">
                <h3>Revestimientos</h3>
                <p>Tabla Revestimiento PVC por 250mm de ancho. Precio por ml.</p>
                <h4>$ {props.price}</h4>
            </div>
            <a href="#">Ver más</a>
        </div>
    );
}

export default Card;