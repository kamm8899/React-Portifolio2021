import React, {useState} from 'react';
import mountain from '../../assets/images/mountain.png';
import passwordgenerator from '../../assets/images/password_generator.png';
import webapi from '../../assets/images/webapiquiz.png';
import work_day from '../../assets/images/work_day_scheduler.png';
import weatherforecast from '../../assets/images/weatherforecast.png';
import nationalpark from '../../assets/images/nationalpark.png';
import teamgenerator from '../../assets/images/teamgenerator.png';
import employeedata from '../../assets/images/employeedata.png';
import mvcdasboard from '../../assets/images/mvc_dashboard.png';
import mongodb_social from '../../assets/images/mongodb_social.png';
import deepblue from '../../assets/images/deepblue.png';
import Project from '../../project';

function Portfolio(project) {
    const [projects, setProjects] = useState([
        {
            "id": 1,
            "name": "Movie_Analytics",
            "image": mountain,
            "techStack": "Python",
            "github": "https://github.com/kamm8899/Movie-Analytics-Country",
            "deploy": ""
        }, 
        {
            "id": 2,
            "name": "Password Generator",
            "image": passwordgenerator,
            "techStack": "JavaScript, CSS and HTML",
            "github": "https://github.com/kamm8899/Password-Generator",
            "deploy": "https://kamm8899.github.io/Password-Generator/" 
        },
        {
            "id": 3,
            "name": "Web API Quiz",
            "image": webapi,
            "techStack": "JavaScript, CSS and HTML",
            "github": "https://github.com/kamm8899/Web-API-Code-Challenge-Quiz",
            "deploy": "https://kamm8899.github.io/Web-API-Code-Challenge-Quiz/"
        },
        {
            "id": 4,
            "name": "Work Day Scheduler",
            "image": work_day,
            "techStack": "JavaScript, API, CSS and HTML",
            "github": "https://github.com/kamm8899/Work-Day-Scheduler",
            "deploy": "https://kamm8899.github.io/Work-Day-Scheduler/"
        },
        {
            "id": 5,
            "name": "Weather Forecast",
            "image": weatherforecast,
            "techStack": "JavaScript, API, CSS and HTML",
            "github": "https://github.com/kamm8899/Open-Weather-Weather-Forecast",
            "deploy": "https://kamm8899.github.io/Open-Weather-Weather-Forecast/"
        },
        {
            "id": 6,
            "name": "NationalPark",
            "image": nationalpark,
            "techStack": "JavaScript, API, CSS and HTML",
            "github": "https://github.com/kamm8899/National-Park-Project",
            "deploy": "https://miraj00.github.io/National-Park-Trip-Planner/" 
        },
        {
            "id": 7,
            "name": "Team Generator",
            "image": teamgenerator,
            "techStack": "JavaScript, Node.Js, CSS and HTML",
            "github": "https://github.com/kamm8899/Team-Profile-Generator--OOP",
            "deploy": "" 
        },
        {
            "id": 8,
            "name": "Employee Database",
            "image": employeedata,
            "techStack": "JavaScript, Node.Js, Sequelize, Express.Js CSS and HTML",
            "github": "https://github.com/kamm8899/Team-Profile-Generator--OOP",
            "deploy": ""  
        },
        {
            "id": 9,
            "name": "MVC Dashboard",
            "image": mvcdasboard,
            "techStack": "JavaScript, Node.Js, Sequelize, Express.Js, SQL, CSS and HTML",
            "github": "https://github.com/kamm8899/MVC-Dashboard",
            "deploy": "https://letstechtogether.herokuapp.com/"  
        },
        {
            "id": 10,
            "name": "Mongodb_Social",
            "image": mongodb_social,
            "techStack": "JavaScript, Node.Js, Mongoose, MongoDBCSS and HTML",
            "github": "https://github.com/kamm8899/Mongodb_Social",
            "deploy": "" 
        },
        { 
        "id": 11,
        "name": "Deep Blue",
        "image": deepblue,
        "techStack": "JavaScript, Node.Js, Sequelize,SQL and HTML",
        "github": "https://github.com/kamm8899/Mongodb_Social",
        "deploy": ""
        }
        ]);

    return (
    <div id= "project">
        {/* <Project key={39899373} project={projects[2]}>Black Poop</Project> */}
        {projects.map((project) => { 
           return <Project key={project.id} project={project}>Black Poop</Project>
})}
    </div>
 );
  }

export default Portfolio;
