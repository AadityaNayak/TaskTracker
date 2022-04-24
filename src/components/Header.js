import React from 'react'
import { useLocation } from 'react-router-dom';
import Button from './Button';


const Header = (props) => {

  const location = useLocation()
  
  return (

    <header className='header' onClick={props.onAdd}>
        <h1>{props.title}</h1>
        {location.pathname === '/' && <Button text = {props.showAdd ? 'Close' : 'Add'} color = {props.showAdd ? 'red' : 'green'}/>}
    </header>
  )
}

Header.defaultProps = {
    title: "Task Tracker",
};

export default Header