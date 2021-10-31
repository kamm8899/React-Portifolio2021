import React from 'react'


function Nav(props) {
    return (
        <div>
           <button onClick = {() => props.setCount(0)}>About</button>
           <button onClick = {() => props.setCount(1)}>Portfolio</button>
           <button onClick = {() => props.setCount(2)}>Contact</button>
           <button onClick = {() => props.setCount(3)}>Resume</button>

            
        </div>
    )
}

export default Nav;
