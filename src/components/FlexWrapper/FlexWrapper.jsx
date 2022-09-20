import React from 'react'
import './flexWrapper.css';

function FlexWrapper(props) {
  return (
    <div>
      <h1>Nada</h1>
      <div className="flexwrapper">{props.children}</div>
    </div> 
  ); 
}

export default FlexWrapper;


