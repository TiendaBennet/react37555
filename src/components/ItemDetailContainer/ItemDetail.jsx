import React from "react"
import Button from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";
import "./../Products/card.css";


function ItemDetail(props) { 
    let { img, title, descripcion, price, stock, sku } = props;
    
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

export default ItemDetail;