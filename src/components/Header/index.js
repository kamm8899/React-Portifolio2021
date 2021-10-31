import React from 'react'
import Nav from '../Nav';

function Header(props) {
    return (
        <header>
            <Nav setCount= {props.setCount} />
            
        </header>
    )
}

export default Header;
