import React from 'react';

function About () {
    return(
        <section className="title">
            <h1 class="name">About: Kiran Riaz</h1>
            <hr></hr>
            <div className="row justify-content-center">
                <div className="col-10" id="about-section">
                    <img class="mb-5" src="https://github.com/riazk88/react-portfolio/src/assets/images/profile_pic.JPG" alt="Kiran Riaz"/>
                    <p>
                    Semiotics disrupt chicharrones tbh, pour-over brooklyn pabst gastropub helvetica kogi taiyaki. Fingerstache portland heirloom fanny pack chillwave ennui, sustainable trust fund. Freegan chia taxidermy tbh cray sriracha readymade knausgaard hella. Twee chia humblebrag, letterpress disrupt marfa unicorn asymmetrical offal lyft selvage yr butcher. Chillwave heirloom farm-to-table, cloud bread semiotics locavore bushwick twee cray jianbing keffiyeh brooklyn fixie.
                    </p>
                    <p>
                        <a href="#/resume" class="link">Check out my resume!</a>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;