import React from 'react'

const Button = (props) => {
  return (
    <button className='btn' style = {{backgroundColor:props.color}} onClick = {props.onClick}>{props.text}</button>
  )
}

Button.defaultProps = {
    text: "Button",
    color: "steelblue",
    onClick: ()=>{
        console.log("The button has been clicked")
    }
};

export default Button