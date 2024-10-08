import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Intro from './components/Introduction/Intro';
import About from './components/About/About';
import Contact from './components/Contact/Cont';
import { useRef } from 'react';


function App() {

// Create a reference for the section
const sectionRef = useRef(null);

// Function to handle scrolling
const scrollToSection = () => {
  sectionRef.current.scrollIntoView({ behavior: 'smooth' });
};

  return (
    <div className="App-header">
      <NavBar/>

      <Intro scrollToSection={scrollToSection}/>
      <About/>
      <Contact sectionRef={sectionRef}/>
    </div>
  );
}

export default App;
