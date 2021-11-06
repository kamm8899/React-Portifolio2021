import React from 'react';

function Project(project){
    const {
        name,
        techStack,
        github,
        deploy
    }=project;

    return(
        <div className = "flex-row">
            <section>
                <h1>{name}</h1>
                <p>{techStack}</p>
                <a href = {github}></a>
                <a href = {deploy}></a>
                {/* <img
                    src= {`./assets/images/${image}`} width= "50" /> */}

            </section>

        </div>
    )

}

export default Project;

