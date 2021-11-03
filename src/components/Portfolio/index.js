import React from 'react'
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/Mountain.jpg";



function Portfolio(props) {
    const currentPortifolio ={
        name: "projects",
        description:
        "Projects on github"
    };
    return (
        <div>
            <section>
                <h1>{capitalizeFirstLetter(currentPortifolio.name)}</h1>
                <h2>TechStack:</h2>
                <p>Descriptions</p>
                <div>
                    <img
                        src={photo}
                        alt="Placeholder Photo"
                        className="img-thumbnail mx-1"
                        />
                </div>
            </section>
        </div>
    );
}

export default Portfolio;
