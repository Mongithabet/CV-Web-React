import React from 'react';
import './App.css';
import Content from './components/Content'

import Navbar from './components/Navbar'

import Experience from './components/Experience'
import Projets from './components/Projets'
import Education from './components/Education'
import Social from './components/Social'
import {
	BrowserRouter as Router,
	Switch,
	Route,
  Link
  
  } from "react-router-dom";
  class App extends React.Component {
 
    render() {
  return (
    <Router>
<Switch>
          
    <div  className="container bg">

              <Navbar/>
            <Content/>
            
              <br/>
              <br/>
              <br/>
              <div className="container-fluid">
              <div className="row">
  <div className="col-2  "></div>
  <div className=" col-sm-12 col-lg-10 ">
  
 
         
              <div className="col-2"></div>
</div>
</div></div>
<br/><br/><br/><br/>
              <div className="container-fluid">
              <div className="row">
  <div className="col-2  "></div>
  <div className=" col-sm-12 col-lg-8  "> 
         
              </div>
  <div className="col-2"></div>
</div>
</div>

<div className="container">
              <div className="row">
  <div className="col-2"></div>
  <div className="col-sm-12 col-lg-8">
              
     </div>
  <div className="col-2"></div>
</div>
</div>

<div className="container">
              <div className="row">
  <div className="col-2"></div>
  <div className="col-sm-12 col-lg-8">
       
             
                  </div>
  <div className="col-2"></div>
</div>
</div>

<div className="container">
              <div className="row">
  <div className="col-2"></div>
  <div className="col-sm-12 col-lg-8">


 
                  </div>
  <div className="col-2"></div>
</div>
</div>
<br/>
<div className="container">
  <div className="row">
  <div className="col-1 margin "></div>

    <div className="col-sm-12 col-lg-12 "><Experience/></div>
    <div className="col-1 "></div>
  </div>
  <div className="container-fluid">
  <div className="row">
    <div className="col-2 "></div>
    <div className="col-sm-12 col-lg-12 "><Projets nom="02-Projets"/></div>
    <div className="col-2 "></div>
  </div>
  </div>
  </div>
  <div className="container-fluid">
  <div className="row">
    <div className="col-2 "></div>
    <div className="col-sm-12 col-lg-12 "><Education nom="03-Education"/></div>
    <div className="col-2 "></div>
  </div>
  </div>
  <div className="container-fluid">
  <div className="row">
    <div className="col-2 "></div>
    <div className="col-sm-12 col-lg-8 ">
   
    </div>
    <div className="col-2 "></div>
  </div>
  </div>
  <br/><br/>
  <div className="container-fluid">
  <div className="row">
    <div className="col-2 "></div>
    <div className="col-sm-12 col-lg-8 "><Social git="https://github.com/Mongithabet"/></div>
    <div className="col-2 "></div>
  </div>
  </div>
  </div>
  </Switch>
    </Router>
   
  );
}
  }
export default App;
