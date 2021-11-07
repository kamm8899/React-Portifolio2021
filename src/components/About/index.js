import React from 'react';
import profilePic from '../../assets/images/headshot.jpeg'

function About() {
  return (
  
    <section>
      <div>
    <h1 className="about">About Me?</h1>
    <img src={profilePic} style={{height: '300px'}} alt="headShot" className="img-headShot"></img>
    <p>Insightful result-driven Software Engineer with notable success in planning, analyzing, andd implementing Software through the DevOps Framework and IT Solutions in support of business objectives, with the  
     solutions in support of business objective. Posses strong commitment to enviroment dynamics with the ability to lead teams from a startup state to a mature Agile based team.  
     <br></br>
     I have worked for Prudential Insurance since July 2019, I was hired as a Associate System Developer and moved into a Scrum master role. During that time I worked with a On-prem DevOps teams, 
     as well as with as with a Machine Learning Data Science Team. I started to help with spinning up pipelines during my time with the DevOps team. In September of 2020, I changed departments and I was
     the lead Scrum Master for the Enterprise DevOps department. I helped with 5 teams with Scrum Master duties, and I also worked part-time as an Pipeline Engineer with onboarding new teams to our DevOps 
     offering. I also helped upper Leadership with Transformation initiatives by targeting the path to bring the new Enterprise DevOps offering to as many teams as possible. 
     <br></br>
    In October of 2021 I was promoted to a Pipeline Engineer, currently I lead the Onboarding of all teams requesting pipelines for Prudential Insurance. This includes delegating new pipeline request, provision new 
    pipelines for the organization, trouble shooting piplines. Im the front gate for all DevOps Onboarding where a team will need to request an Onboarding and they will receive a demo of the DevOps offering from me before
    they are onboarded to our DevOps pipeline. The pipelines I currently provision includes a On-prem Offering and a Cloud Offering via AWS and Jenkins. 
     </p>
     </div>
  </section>
 
  );
}

export default About;