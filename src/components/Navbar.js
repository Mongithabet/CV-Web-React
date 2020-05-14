import React, { Component } from 'react'
import '../App.css';
import logo from './icons/logo.png'

export default class Navbar extends Component {
   
    render() {
        return (
            <nav className="navbar fixed-top  navbar-expand-lg navbar-light bg ">
       <div className="container-sm"> 
       <a href="#"><img className="Slogo" src={logo}  alt="logo"/></a>

       </div>

            <a className="navbar-brand text-white a2" href="#">A PROPOS</a>
            <button className="navbar-toggler bg2" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link text-white a2" href="#">COMPÉTENCES <span className="sr-only bg2">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white a2" href="#">EXPÉRIENCES</a>
                </li>
                
                <li className="nav-item">
                  <a className="nav-link text-white a2" href="#">PROJETS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  text-white a2" href="#">EDUCATION</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  text-white a2" href="#">ACTIVITÉS</a>
                </li>
                
              </ul>
            </div>
            
          </nav>
        )
    }
}
