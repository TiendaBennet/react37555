import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";
import "./navBar.css";

function CartWidget() {
    return (
      <div>
        <FontAwesomeIcon className="cartshopping" icon={ faCartShopping } />
      </div>
    );
  }
  
  export default CartWidget;