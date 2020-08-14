import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Projects(props) {
    return(
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image}/>
            </div>
            <div className="content">
                <p className="project-title" id="card-title">{props.name}</p>
                <p>
                    <a href={props.github}><img src="https://img.icons8.com/nolan/60/github.png" alt="" id="project-icon"/></a>
                    <a href={props.deployed}><img src="https://img.icons8.com/nolan/64/monitor.png" alt="" id="project-icon"/></a>
                </p>
            </div>
        </div>
    );
}

export default Projects;