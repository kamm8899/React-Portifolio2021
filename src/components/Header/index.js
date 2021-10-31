import React from 'react'
import Nav from '../Nav';

function Header(props) {
    return (
        <div>
        <header className= 'header'>
            <div>
        <h2>
        <span className= 'name'></span> Jessica Kamman
      </h2>
      </div>
        <Nav setCount= {props.setCount} />  
        </header>
        </div>
    )
}

export default Header;
