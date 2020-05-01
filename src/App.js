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
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
