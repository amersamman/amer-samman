import Amer from '../../images/Amer.jpg';
import React from 'react';
import './Intro.css';

const openPdf = () => {
    const pdfUrl = '/Amer_Samman_Resume.pdf';
    window.open(pdfUrl, '_blank');
  };


export default function Intro(){
    
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
                    <button className='contact-btn'>Contact Info</button>
                </div>
            </div>
            
        </div>  
    )
}