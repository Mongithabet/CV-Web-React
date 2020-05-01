import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../App.css';

export default class Navbar extends Component {
   
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg ">
            <a className="navbar-brand text-white" href="#">A PROPOS</a>
            <button className="navbar-toggler bg2" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link text-white" href="#">COMPÉTENCES <span className="sr-only bg2">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">EXPÉRIENCES</a>
                </li>
                
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">PROJETS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  text-white" href="#">EDUCATION</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  text-white" href="#">ACTIVITÉS</a>
                </li>
                
              </ul>
            </div>
            
          </nav>
        )
    }
}
