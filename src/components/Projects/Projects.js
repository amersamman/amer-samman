import './Projects.css';
import Kestrel from '../../images/Kestrel.jpg';

export default function Projects(){


    return (
        <section className='projects-section'>
            <div className='projects-main-header'>
                <p className='sub-header'>Browse My Recent</p>
                <h1 className='header'>Projects</h1>
            </div>
            <div className='projects-container'>
                <div className='projects'>
                    <img
                        src={Kestrel}
                        alt='Project Kestrel'
                        className='project-image'

                    />
                    <div className='project-desc-container'>
                        <div className='project-desc'>
                            <h2 className='project-header'>Project Kestrel</h2>
                            <p className='project-text'>Project Kestrel is a full-stack autonomous drone initiative that integrates machine learning, computer vision, and hand gesture control. The drone uses object detection to autonomously follow and interact with targets. Hand gestures, captured by an external camera, control the drone's movement, providing an innovative hands-free interface.</p>
                        </div>
                        <div className='tech-section'>
                            <p className='tech-header'>Technologies Used:</p>
                            <div className='tech-list-section'>
                                <div className='tech-list'>
                                    <ul className='technologies-used-1'>
                                        <li>Python</li>
                                        <li>TensorFlow</li>
                                        <li>OpenCV</li>
                                    </ul>
                                </div>
                                <div className='tech-list'>
                                    <ul className='technologies-used-1'>
                                        <li>Numpy</li>
                                        <li>Pandas</li>
                                        <li>YOLO</li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>        
                    </div>
                </div>
            </div>        
        </section>
    )
}