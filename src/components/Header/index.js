import React from 'react';
import Nav from '../Nav';
import logo from '../../assets/white_logo_transparent_background.png';
const display={
    flex:{
        justifyContent:"space-between"
    },
    img:{
        width: "50%",
        height: "50%"
    }
}

function Header(props) {
    return (
        <div>
          <header style={display.flex} className="header">
            <div>
              <h2>
                <img src={logo} alt ="logo" style={display.img} ></img> 
              </h2>
            </div>
            <div>
              <Nav setCount={props.setCount} />
            </div>
          </header>
        </div>
      );
    }
export default Header;


//fix logo on header to left 
