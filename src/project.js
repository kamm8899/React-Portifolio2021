import React from 'react';

function Project(props){
    const {
        name,
        techStack,
        github,
        deploy
    }=props.project;

    return(

        <div className = "flex-row">
            <section>
            <p></p>
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

