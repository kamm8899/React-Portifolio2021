import React from 'react';

function Project(props){
    const {
        name,
        techStack,
        github,
        deploy,
        image
    }=props.project;

    const url= {
        backgroundImage: `url(${image})`

    }
    return(

        <div className = "flex-row">
            <section className="port" style={url}>
            {/* <img src={image} alt ="image" /> */}
                <h1>{name}</h1>
                <p>{techStack}</p>
                <a className= "github" href = {github}>Visit Github</a>
                <br></br>
                <a href = {deploy}>Deployed To</a>
                {/* <img
                    src= {`./assets/images/${image}`} width= "50" /> */}
                    

            </section>

        </div>
    )

}

export default Project;

