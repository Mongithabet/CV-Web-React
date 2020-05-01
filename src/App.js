import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Apropos from './components/Apropos'
import Competences from './components/Competences'
function App() {
  return (
    <div className="container bg">
              <Navbar/>
              <br/>
              <br/>
              <Apropos/>
              <Competences/>
      
    </div>
  );
}

export default App;
