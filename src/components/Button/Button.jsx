import React from 'react'
import './button.css';

function Button(props) {
  return (
    <div className='btn'>
        {props.text}
        </div>
  )
}

export default Button;