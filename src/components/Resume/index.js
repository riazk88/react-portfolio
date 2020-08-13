import React from 'react';

function Resume () {
    return(
        <section class="mb-5">
            <h1>Kiran Riaz: <span>Resume</span></h1>
            <hr></hr>
            <div className="justify-content-center" id="resume">
                <h3 className="font-weight-bold mb-4">Download my full resume</h3>
                <div>
                <a href="https://github.com/riazk88/react-portfolio/raw/master/src/assets/kiranriaz.pdf" class="link">Resume</a>
                </div>
            </div>
            <div className="justify-content-center m-5">
                <div id="front-back">
                    <h2>Front End</h2>
                    <p>HTML, CSS, Javascript, Bootstrap, Materialize, Foundation, Bulma, Handlebars</p>
                </div>
                <div id="front-back">
                    <h2>Back End</h2>
                    <p>Node, Express, SQL, Sequelize, NoSQL, API's</p>
                </div>
            </div>
        </section>
    )
}

export default Resume;