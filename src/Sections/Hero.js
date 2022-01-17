import React from "react";
 class Hero extends React.Component{
    constructor(){
        super();
    }
    render()
    {
        return(
            // hero section 
            <section className="firstsection d-flex align-items-center ">
                <div className="sub-section col-6 text-center ">
                   <h1 className="display-1 col-12">Saeed Adel Saeed</h1>
                   <h5 className="display col-12 py-4">Full Stack Web Developer</h5>
                   <button type="button" className="btn btn-lg btn-outline-dark ">Contact Me</button>
                </div>
            </section>
        )
    }
}
export default Hero;
