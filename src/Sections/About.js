import React from "react";
class About extends React.Component{
    constructor()
    {
        super();
    }
    render()
    {
        return(
            <section className="secondsection d-flex align-items-center ">
                <div className="col-6 text-center display-5">About Me</div>
                <div className="col-4"><p>Hey everyone , I'm a full stack web developer with a solid experience in building web applications from scratch
            by using some cool technologies such as React js and Django Framework besides that i have knowledge in other software development tools like 
             Git, Github , Unit Testing , REST API and operation management tools</p>
             <a href="#" className="btn btn-dark btn-lg active " role="button" aria-pressed="true">Download Resume</a>
             </div>
            </section>
        )
    }
}
export default About;