import React, { Component } from 'react'
import '../App.css';
import Content from './Content'
import Competences from './Competences'
import Progress from './Progress'
import Experience from './Experience'
import Projets from './Projets'
import Education from './Education'
import Social from './Social'
import {
	BrowserRouter as Router,
	Switch,
	Route,
  Link
  
  } from "react-router-dom";

export default class Navbar extends Component {
   
    render() {
        return (
          <nav id="navbar-example2" class="navbar fixed-top navbar-light bg-light">
          <a class="navbar-brand" Link="#">Navbar</a>
          <ul class="nav nav-pills">
            <li class="nav-item">
            {/* <Link className="nav-link" to="#fat" href="#fat">Apropos</Link> */}
               <a class="nav-link" href="#fat">Apropos</a> 
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#mdo">Competences</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#one">one</a>
                <a class="dropdown-item" href="#two">two</a>
                <div role="separator" class="dropdown-divider"></div>
                <a class="dropdown-item" href="#three">three</a>
              </div>
            </li>
          </ul>
        </nav>
      
        )
    }
}