import './Cont.css';
import Linkedin from '../../images/linkedin.png';
import EmailLogo from '../../images/emaillogo.png';


export default function Contact({sectionRef}){

    return(
        <section className='section'>
            <p className='touch'>Get In Touch</p>
            <h2 className='contactme'>Contact Me</h2>
            <div className='contact-box'>
                <div className='contact-container'>
                    <img src={EmailLogo} alt='Email Logo' className='emaillogo'/>
                    <p><a href="mailto:amersamman2@gmail.com">amersamman2@gmail.com</a></p>
                </div>
                <div className='contact-container'>
                    <img src={Linkedin} alt='LinkedIn Icon' className='linkedin'/>
                    <p ref={sectionRef}><a href='https://www.linkedin.com/in/amer-samman'>Linkedin</a></p>
                </div>
                
            </div>
        </section>
    )
}