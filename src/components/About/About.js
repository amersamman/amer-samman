import './About.css';
import Camselfie from '../../images/CamAmer.jpg';
import Experience from '../../images/experience.png';
import Education from '../../images/education.png';

export default function About(){

    return(
    <>
        <div className='empty-space'></div>
        <section className="about">
            <p className='section-p'>Get To Know More</p>
            <h1 className="about-me">About Me</h1>
            <div className='section-container'>
                <div className='section-pic-container'>
                    <img
                        src={Camselfie}
                        alt='Profile Picture'
                        className='camselfie'
                    />
                </div>

                <div className='details-container'>
                    <div className='about-container'>
                        <div className='details'>
                            <img
                                src={Experience}
                                alt="Experience icon"
                                class="icon"
                            />
                            <h3>Experience</h3>
                            <p className='sub-text'>2+ years <br />Frontend Development</p>
                        </div>
                        <div className='details det-right'>
                            <img
                                src={Education}
                                alt="Experience icon"
                                className="icon"
                            />
                            <h3>Education</h3>
                            <p className='sub-text'>B.S. Bachelors Degree <br />Computer Science</p>
                        </div>
                    </div>
                    <div class="text-container">
                        <p>
                        Hi, I'm Amer, a Computer Science major at the University of Central Florida (UCF) with a passion for programming. 
                        I began my coding journey in high school, and since then, I've been constantly learning and evolving my skills. 
                        At UCF, I actively lead and contribute to various projects, gaining hands-on experience in both full-stack development and machine learning. 
                        When I'm not working on class assignments, you'll find me diving into side projects, building web applications, and exploring the possibilities of AI. 
                        I thrive on turning ideas into functional and impactful solutions, whether it's a personal project or a team-based effort.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
        
    )
}