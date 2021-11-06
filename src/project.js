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
            <section style={url}>
            {/* <img src={image} alt ="image" /> */}
                <h1>{name}</h1>
                <p>{techStack}</p>
                <a href = {github}>Github WebPage</a>
                <a href = {deploy}>Deployed To</a>
                {/* <img
                    src= {`./assets/images/${image}`} width= "50" /> */}
                    

            </section>

        </div>
    )

}

export default Project;

