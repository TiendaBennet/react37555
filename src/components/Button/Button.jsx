import React, { useState } from "react";
import './button.css';

function Button(props) {

  return (
      <button
          onClick={props.onClick}
          className='btn item-count__btn-add'
      >
          {props.children}
      </button> )
}

export default Button