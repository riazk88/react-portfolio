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
                    Hi, my name is Kiran and welcome to my Portfolio! I'm a mental health therapist and a web developer.
                    <br></br>
                    I've been in the mental health field for a few years but now I'm excited for my transition into tech.
                    <br></br>
                    In my spare time I like to strengthen my coding skills and create mock webpages.
                    <br></br>
                    I also enjoy being outdoors, reading, working out, traveling, cooking, and playing with my dog, Baloo. 
                    <br></br>
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