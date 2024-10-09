import './Experience.css';
import Checkmark from '../../images/checkmark.png';

export default function Experience(){



    return (
        <section className="experience-section">
            <div className="experience-header">
                <p className='sub-header'>Explore My</p>
                <h1 className='header'>Experience</h1>
            </div>
            <div className='parent-container'>
                <div className='experience-container'>
                    <div className='experience-1'>
                        <h2 className='experience-title'>Programming Languages</h2>
                        <div class="article-container">
                            <article className='margins'>
                                <img
                                src={Checkmark}
                                alt="Experience icon"
                                class="icon"
                                />
                                <div>
                                <h3 className='skills'>JavaScript</h3>
                                <p>Experienced</p>
                                </div>
                            </article>
                            <article className='margins'>
                                <img
                                src={Checkmark}
                                alt="Experience icon"
                                class="icon"
                                />
                                <div>
                                <h3 className='skills'>C</h3>
                                <p>Experienced</p>
                                </div>
                            </article>
                            <article className='margins'>
                                <img
                                src={Checkmark}
                                alt="Experience icon"
                                class="icon"
                                />
                                <div>
                                <h3 className='skills'>Python</h3>
                                <p>Experienced</p>
                                </div>
                            </article>
                            <article className='margins'>
                                <img
                                src={Checkmark}
                                alt="Experience icon"
                                class="icon"
                                />
                                <div>
                                <h3 className='skills'>Java</h3>
                                <p>Experienced</p>
                                </div>
                            </article>
                            <article className='margins'>
                                <img
                                src={Checkmark}
                                alt="Experience icon"
                                class="icon"
                                />
                                <div>
                                <h3 className='skills'>C++</h3>
                                <p>Basic</p>
                                </div>
                            </article>
                            <article className='margins'>
                                <img
                                src={Checkmark}
                                alt="Experience icon"
                                class="icon"
                                />
                                <div>
                                <h3 className='skills'>SQL</h3>
                                <p>Beginner</p>
                                </div>
                            </article>
                        </div>
                    </div>

                    <div className='experience-1'>
                        <h2 className='experience-title'>Frameworks/Libraries</h2>
                        <div class="article-container">
                            <article className='margins'>
                                <img
                                src={Checkmark}
                                alt="Experience icon"
                                class="icon"
                                />
                                <div>
                                <h3 className='skills'>React</h3>
                                <p>Intermediate</p>
                                </div>
                            </article>
                            <article className='margins'>
                                <img
                                src={Checkmark}
                                alt="Experience icon"
                                class="icon"
                                />
                                <div>
                                <h3 className='skills'>React Native</h3>
                                <p>Basic</p>
                                </div>
                            </article>
                            <article className='margins'>
                                <img
                                src={Checkmark}
                                alt="Experience icon"
                                class="icon"
                                />
                                <div>
                                <h3 className='skills'>Django</h3>
                                <p>Beginner</p>
                                </div>
                            </article>
                            <article className='margins'>
                                <img
                                src={Checkmark}
                                alt="Experience icon"
                                class="icon"
                                />
                                <div>
                                <h3 className='skills'>TailWind</h3>
                                <p>Basic</p>
                                </div>
                            </article>
                            <article className='margins'>
                                <img
                                src={Checkmark}
                                alt="Experience icon"
                                class="icon"
                                />
                                <div>
                                <h3 className='margins'>Pandas</h3>
                                <p>Intermediate</p>
                                </div>
                            </article>
                            <article className='margins'>
                                <img
                                src={Checkmark}
                                alt="Experience icon"
                                class="icon"
                                />
                                <div>
                                <h3 className='margins'>TensorFlow</h3>
                                <p>Intermediate</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
                
        </section>
    )
}