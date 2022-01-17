import React from "react";
class Skills extends React.Component{
    constructor()
    {
        super();
    }
    render()
    {
        let myskills = [
            {skillname: "HTML" ,progress: 75 },
            {skillname: "CSS" ,progress: 75 },
            {skillname: "JAVASCRIPT" ,progress: 50 },
            {skillname: "PYTHON" ,progress: 100 },
            {skillname: "DJANGO" ,progress: 75 } 
        ]
        return(
            <section className="thirdsection container bg-dark">
                <div className="sub-section text-light ">
                    <h2 className="display-3 text-center py-5">Skills</h2>
                    <div className="container col-9"><p className="text-center">Code is written in programming languages such as SQL, Java, C++, or Python. 
                        Programmers aren't expected to know every programming language in existence, 
                        but it would be beneficial to be proficient in at least two languages to 
                        increase your employment and career opportunities. Most programmers typically 
                        decide on an area of specialization and then learn the programming language 
                        that is most appropriate for that field.</p></div>
                    <div className="container d-flex text-center ">
                        <div className="col-6 py-5 "><h3 className="fs-2">My Focus</h3>
                        <ul className="list-unstyled py-2">
                            <li className="py-2">Frontend Development</li>
                            <li className="py-2">Backend Development</li>
                            <li className="py-2">Web Design</li>
                            <li className="py-2 ">Machine Learning</li>
                        </ul>
                        </div>
                        <div className="col-5 py-5">
                            {
                                myskills.map((element)=>{
                                    return (
                                        <>
                                            <div className="progress">
                                                <div className="progress-bar bg-secondary" style={{width:`${element.progress}%`}} role="progressbar" aria-valuenow={element.progress} aria-valuemin="0" aria-valuemax="100">{element.skillname}</div>
                                            </div>
                                            <br></br>
                                            <br></br>
                                        </>
                                    )
                                })
                            }
                            <br></br>
                        </div>

                    </div>
                    
                </div>
                
            </section>

        );
    }
}
export default Skills;