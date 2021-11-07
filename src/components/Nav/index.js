import React from 'react'


function Nav(props) {
    return (
        <div className= "Nav">
           <button className= {props.highlight === 0 ? "color": ""} onClick = {() => props.setCount(0)}>About</button>
           <button className= {props.highlight === 1 ? "color": ""} onClick = {() => props.setCount(1)}>Portfolio</button>
           <button className= {props.highlight === 2 ? "color": ""} onClick = {() => props.setCount(2)}>Contact</button>
           <button className= {props.highlight === 3 ? "color": ""} onClick = {() => props.setCount(3)}>Resume</button>

            
        </div>
    )
}

export default Nav;
