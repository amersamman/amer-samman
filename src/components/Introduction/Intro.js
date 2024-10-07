import Amer from '../../images/Amer.jpg';
import Github from '../../images/github.png';
import Linkedin from '../../images/linkedin.png';
import React from 'react';
import './Intro.css';


const openPdf = () => {
    const pdfUrl = '/Amer_Samman_Resume.pdf';
    window.open(pdfUrl, '_blank');
  };


export default function Intro({scrollToSection}){



    
    return(
        <div className ='info'>
            <div className='profile-pic'>
                <img src={Amer} alt='Amer Samman' className="headshot"/>
            </div>

            <div className='profile-info'>
                <h3 className='intro'>Hello, I'm</h3>
                <h1 className ='intro-name'>Amer Samman</h1>
                <h2>Software Engineer</h2>

                <div className='btn-container'>
                    <button className='cv-btn' onClick={openPdf}>
                        Download CV
                    </button>
                    <button className='contact-btn' onclick={scrollToSection}>Contact Info</button>
                </div>
                <div className='social-container'>
                <a href="https://linkedin.com/in/amer-samman/">
                    <img
                        src={Linkedin}
                        alt='My LinkedIn Profile'
                        className='icon'
                    />
                </a>
                <a href='https://github.com/amersamman'>
                    <img
                    src={Github}
                    alt='My GitHub Profile'
                    className='icon'
                    />
                </a>
                </div>
            </div>
            
        </div>  
    )
}