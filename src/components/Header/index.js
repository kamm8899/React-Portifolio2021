import React from 'react'
import Nav from '../Nav';

const display={
    fled:{
        justifyContent:"space-between"
    }
}

function Header(props) {
    return (
        <div>
          <header style={display.flex} className="header">
            <div>
              <h2>
                <img src="./src/assets/logo_transparent_background.png" alt ="logo" width="500" height="600"></img> 
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
