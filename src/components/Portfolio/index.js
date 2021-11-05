import React, {useState} from 'react';

import { capitalizeFirstLetter } from '../../utils/helpers';
import Project from '../../project';

function Portfolio(project) {
    const 
    projects= useState([


            {
                "id": 1,
                "name": "Movie_Analytics",
                // "image": Mountain,
                "techStack": "Python",
                "github": "https://github.com/kamm8899/Movie-Analytics-Country",
                "deploy": ""
            }, 
            {
                "id": 2,
                "name": "Password Generator",
                // "image": PasswordGenerator,
                "techStack": "JavaScript, CSS and HTML",
                "github": "https://github.com/kamm8899/Password-Generator",
                "deploy": "https://kamm8899.github.io/Password-Generator/" 
            },
            {
                "id": 3,
                "name": "Web API Quiz",
                // "image": WebAPI,
                "techStack": "JavaScript, CSS and HTML",
                "github": "https://github.com/kamm8899/Web-API-Code-Challenge-Quiz",
                "deploy": "https://kamm8899.github.io/Web-API-Code-Challenge-Quiz/"
            },
            {
                "id": 4,
                "name": "Work Day Scheduler",
                // "image": Work_Day,
                "techStack": "JavaScript, API, CSS and HTML",
                "github": "https://github.com/kamm8899/Work-Day-Scheduler",
                "deploy": "https://kamm8899.github.io/Work-Day-Scheduler/"
            },
            {
                "id": 4,
                "name": "Weather Forecast",
                // "image": WeatherForecast,
                "techStack": "JavaScript, API, CSS and HTML",
                "github": "https://github.com/kamm8899/Open-Weather-Weather-Forecast",
                "deploy": "https://kamm8899.github.io/Open-Weather-Weather-Forecast/"
            },
            {
                "id": 5,
                "name": "NationalPark",
                // "image": NationalPark,
                "techStack": "JavaScript, API, CSS and HTML",
                "github": "https://github.com/kamm8899/National-Park-Project",
                "deploy": "https://miraj00.github.io/National-Park-Trip-Planner/" 
            },
            {
                "id": 6,
                "name": "Team Generator",
                // "image": TeamGenerator,
                "techStack": "JavaScript, Node.Js, CSS and HTML",
                "github": "https://github.com/kamm8899/Team-Profile-Generator--OOP",
                "deploy": "" 
            },
            {
                "id": 7,
                "name": "Employee Database",
                // "image": EmployeeData,
                "techStack": "JavaScript, Node.Js, Sequelize, Express.Js CSS and HTML",
                "github": "https://github.com/kamm8899/Team-Profile-Generator--OOP",
                "deploy": ""  
            },
            {
                "id": 8,
                "name": "MVC Dashboard",
                // "image": MVCDasboard,
                "techStack": "JavaScript, Node.Js, Sequelize, Express.Js, SQL, CSS and HTML",
                "github": "https://github.com/kamm8899/MVC-Dashboard",
                "deploy": "https://letstechtogether.herokuapp.com/"  
            },
            {
                "id": 9,
                "name": "Mongodb_Social",
                // "image": Mongodb_Social,
                "techStack": "JavaScript, Node.Js, Mongoose, MongoDBCSS and HTML",
                "github": "https://github.com/kamm8899/Mongodb_Social",
                "deploy": "" 
            },
            { 
            "id": 10,
            "name": "Deep Blue",
            // "image": DeepBlue,
            "techStack": "JavaScript, Node.Js, Sequelize,SQL and HTML",
            "github": "https://github.com/kamm8899/Mongodb_Social",
            "deploy": "" 
        
            }
    ])
    return (
    <div>
        {projects.map(({ name, techStack, github, deploy}) => (
            <Project key={projects.name}> <p>name={name}</p></Project>
        ))}
    </div>
 );
  }

export default Portfolio;
