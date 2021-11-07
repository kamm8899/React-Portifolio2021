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
        backgroundImage: `url(${image})`,
        border: "5px solid rgb(45, 8, 45)",
    }
    const flex={
        display: "flex",

    }
   

    return(

        <div className = "flex-row" style={url}>
                <h1>{name}</h1>
                <p>{techStack}</p>
                <a className= "github" href = {github}>Visit Github</a>
                <a href = {deploy}>Deployed To</a>
        </div>
    )

}

export default Project;

