import React from 'react'

const display={
    flex:{
        justifyContent:"space-between"
        
    }
}
function Footer() {
    return (
        <div style={display.flex} id="footer">
            
            <p>
                &copy; LuxStudios | LinkedIn <a href="https://www.linkedin.com/in/jessica-kamman-50a1aa159/"><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" className="icon"/></a> | Github: <a href="https://github.com/kamm8899">< img src= "https://img.icons8.com/color/48/000000/github-2.png" alt= "Github"/></a> | StackOverflow: <a href="https://stackoverflow.com/users/14767066/justbaff00n"><img src="https://img.icons8.com/color/48/000000/stackoverflow.png" alt="Stack Overflow" className="icon"/></a>  Made With: <a href="https://coolors.co/f06543-e8e9eb-e0dfd5-313638-f09d51">color palette</a> | Site is generated via:  <img id="react-icon" src="https://img.icons8.com/color/48/000000/react-native.png" alt="React"/>
        </p>

        </div>
    )
}

export default Footer;
