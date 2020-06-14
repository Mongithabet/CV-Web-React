import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Apropos from './components/Apropos'
import Competences from './components/Competences'
import Progress from './components/Progress'
import Experience from './components/Experience'
import Projets from './components/Projets'
import Education from './components/Education'
import Social from './components/Social'
import Content from './components/Content'
import ReactLoading from "react-loading";

import {
	BrowserRouter as Router,
	Switch,
	Route,
  Link
  
  } from "react-router-dom";
  class App extends React.Component {
     
constructor(props){
  super(props);
  this.enableMessage = this.enableMessage.bind(this);

    this.state = {
      displayMessage: false,
    };

    this.timer = setTimeout(this.enableMessage, 3000);
}
componentWillUnmount() {
  clearTimeout(this.timer);
}

enableMessage() {
  this.setState({displayMessage: true});
}

    render() {
      const {displayMessage} = this.state;

    if (!displayMessage) {
      return <div className="loaderPosition"> <ReactLoading type="spokes" color="#fff" />
      </div>;    }

    
  
  return (
    <Router>
<Switch>

    <div  className="container bg">
    
            <Content/>
            
              <br/>
              <br/>
              <br/>
             
<br/><br/><br/><br/>

<br/>

 
  </div>

  <br/><br/>
  
 
  </Switch>
    </Router>
   
  );
}
  }
export default App;
