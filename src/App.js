import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Intro from './components/Introduction/Intro';

function App() {
  return (
    <div className="App-header">
      <NavBar/>

      <Intro/>
      
    </div>
  );
}

export default App;
