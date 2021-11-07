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
        width: "30%",
        border: "5px solid rgb(45, 8, 45)",
        margin: "10px"
    }
    const flex={
        display: "flex",
        
    }
   

    return(

        <div style = {flex} className = "flex-row">
            <section style={url}>
                <h1>{name}</h1>
                <p>{techStack}</p>
                <a className= "github" href = {github}>Visit Github</a>
                <br></br>
                <a href = {deploy}>Deployed To</a>

            </section>

        </div>
    )

}

export default Project;

