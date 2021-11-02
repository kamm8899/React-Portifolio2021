import React from 'react';
import Nav from '../Nav';
import logo from '../../assets/logo_transparent_background.png';
const display={
    fled:{
        justifyContent:"space-between"
    },
    img:{
        width: "220px",
        height: "350px"
    }
}

function Header(props) {
    return (
        <div>
          <header style={display.flex} className="header">
            <div>
              <h2>
                <img src={logo} alt ="logo" style={display.img} ></img> 
                <span className="name"></span> Jessica Kamman{" "}
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
