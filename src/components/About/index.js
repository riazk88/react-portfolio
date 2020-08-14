import React from 'react';

function About () {
    return(
        <section className="title">
            <h1>Kiran Riaz</h1>
            <img className="mb-5" src="https://github.com/riazk88/react-portfolio/blob/master/src/assets/images/profile_pic.JPG?raw=true" alt="Kiran"/>
            <hr></hr>
            <div className="row justify-content-center">
                <div className="col-10" id="about-section">
                    <p>
                    Semiotics disrupt chicharrones tbh, pour-over brooklyn pabst gastropub helvetica kogi taiyaki.
                    <br></br>
                    Fingerstache portland heirloom fanny pack chillwave ennui, sustainable trust fund. 
                    <br></br>
                    Freegan chia taxidermy tbh cray sriracha readymade knausgaard hella.
                    <br></br>
                    Twee chia humblebrag, letterpress disrupt marfa unicorn asymmetrical offal lyft selvage yr butcher.
                    <br></br>
                    Chillwave heirloom farm-to-table, cloud bread semiotics locavore bushwick twee cray jianbing keffiyeh brooklyn fixie.
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