import React, { Component } from 'react'
import '../content.css';
import '../timelineE.css'
import '../App.css'
import {
	BrowserRouter as Router,
	Switch,
	Route,
  Link
  
  } from "react-router-dom";
import Apropos from './Apropos'
import Competences from './Competences'
import Progress from './Progress'
import Experience from './Experience'
import Projets from './Projets'
import Education from './Education'
import Social from './Social'
import logo from './icons/logo.png'
import fr from './icons/fr.png'
import en from './icons/en.png'

export default class Content extends Component {
   state={
     number1:"01. ",
     number2:"02. ",
     number3:"03. ",
     number4:"04. ",
     number5:"05. "
   }

    render() {
        return (
          <Router>
          <Switch>
 
  
  
       <div className="container  ">
       <div className="container-sm"> 
       <a href="#"><img   className="Slogo" src={logo}  alt="logo"/></a>
       <a href="#" ><img  width="20" height="20" src={fr}  alt="fr"/></a> 
       <a href="#"><img width="30" height="23" src={en}  alt="en"/></a>

       </div>
<div className="container-sm  "> 
<nav className="navbar fixed-top  navbar-expand-lg navbar-light bg marginNav ">
      
            <a className="navbar-brand text-white a2" href="#"></a>
            <button className="navbar-toggler bg2" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
            <li className="nav-item active ">
        <a className="nav-link text-white a2 scroll " href="#one"><span className="color3">{this.state.number1}</span>A PROPOS
    
        </a>
              
            </li>
            
            <li className="nav-item">
              <a className="nav-link text-white a2 scroll" href="#two"><span className="color3">{this.state.number2}</span>COMPÉTENCES<span className="sr-only bg2">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white a2 scroll" href="#three"><span className="color3">{this.state.number3}</span>EXPÉRIENCES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white a2 scroll" href="#four"><span className="color3">{this.state.number4}</span>PROJETS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white a2 scroll" href="#five"><span className="color3">{this.state.number5}</span>EDUCATION</a>
            </li>
        </ul>
        </div>
       
        </nav>
        </div>
        <div className="jumbotron-fluid text-center one" id="one">
          <span className="display-3"></span> <div className="container-fluid">
              <div className="row">
  <div className="col-2  "></div>
  <div className=" col-sm-12 col-lg-10 marginLogo2 ">
  <Apropos/>    
  
              <div className="col-2"></div>
</div>
</div></div>
        </div>
        <div className="jumbotron-fluid2 text-center two" id="two">
          <span className="display-3"></span> <div className="container">
              <div className="row">
  <div className="col-2  "></div>
  <div className=" col-sm-12 col-lg-8 marginLogo2 "> 
          <Competences 
              nom='02.Compétences professionnelles' 
              title='Langages de programmation'
              cont=''

               vv= { <Progress 
                nom1="Java " value1="80%"
                nom3='Javascript' value2="85%"
                 nom2 ='PHP' value3="70%"
                 nom4='HTML/CSS' value4="85%"
                 nom5="" value5=""
                 nom6="" value6=""
                 prog4="progress blue" prog5='' prog6=''
                 prog_bar4="progress-bar" prog_bar5='' prog_bar6=''

               
                 />}
              />
              </div>
  <div className="col-2"></div>
</div>
</div>
             
<div className="container">
              <div className="row">
  <div className="col-2"></div>
  <div className="col-sm-12 col-lg-8">
               <Competences
              nom='' 
              title='Base de données'
               cont=''
               vv= { <Progress
                nom1="MySQL,SQL Server " value1="90%"
                nom3="MongoDB" value2="55%"
                 nom2 ="H SQL" value3="75%"
                 nom4="Access" value4="85%"
                 nom5="" value5=""
                 nom6="" value6=""
                 prog4="progress blue" prog5='' prog6=''
                 prog_bar4="progress-bar" prog_bar5='' prog_bar6=''

                 />}
               />
     </div>
  <div className="col-2"></div>
</div>
</div>

<div className="container">
              <div className="row">
  <div className="col-2"></div>
  <div className="col-sm-12 col-lg-8">
       
              <Competences
               nom='' 
               title='Frameworks & CMS'
               cont=''

               vv= { <Progress
                nom1="Angular " value1="90%"
                nom3="React JS" value2="90%"
                 nom2 ="Spring/Java EE " value3="85%"
                 nom4="NodeJS" value4="65%"
                 nom5="WordPress" value5="50%"
                 nom6="Prestashop" value6="55%"
                 prog4="progress blue" prog5='progress blue' prog6='progress blue'
                 prog_bar4="progress-bar" prog_bar5='progress-bar' prog_bar6='progress-bar'

                 />}
               />
                  </div>
  <div className="col-2"></div>
</div>
</div>

<div className="container">
              <div className="row">
  <div className="col-2"></div>
  <div className="col-sm-12 col-lg-8">


  <Competences nom = ''  title='Autres' cont='Autres Technologies: Micronaut, ElasticSearch, Spring Security, REST APIs, Jenkins, Kubernetes, Docker, AWS, Google Cloud
Méthodologies & Conception: UML, Scrum
Testing: Test Driven Development, JUnit, Jasmine, ChaiJS, Enzyme
Outils: GIT, IntelliJ, Slack
'/>
                  </div>
  <div className="col-2"></div>
</div>
</div>
<div className="container-fluid">
  <div className="row">
    <div className="col-2 "></div>
    <div className="col-sm-12 col-lg-8 ">
    <Competences nom = '06. Activités extracurriculaires et sociales'  title='' cont='• IAS Annual Meeting 2019 ♦ Participant, Travel Grant Recipient ♦ 2019 | Baltimore, MD, USA
• IEEE Tunisia Section ExCom ♦ Student Branches Coordinator ♦ 2018 - Présent | ESPRIT
• IAS Annual Meeting 2018 ♦ Participant, Travel Grant Recipient ♦ 2018 | Portland, OR, USA
• IEEE ESPRIT CS Chapter & IAS Chapter ♦ Chair / Vice-Chair ♦ 2018 - Présent | ESPRIT
• IEEE ESPRIT Student Branch ♦ Membre Fondateur ♦ 2017 - Présent | ESPRIT
• Web4Innovation Mobile Dev challenge ♦ 1er Prix Application mobile (MShop) ♦ 2017 | Tunis
• Club Smart Projects (Club Robotiques) ♦ Membre Bureau Exécutive ♦ 2015 - 2016 | ISSAT Sousse
• Conseil scientifique ISSAT Sousse ♦ Représentant des étudiants ♦ 2015 – 2016 | ISSAT Sousse
• Association culturelle et environnementale de Kélibia ACEK ♦ Membre Actif ♦ 2013 - 2018 | Kélibia
'/>
    </div>
    <div className="col-2 "></div>
  </div>
  </div>
        </div>
        <div className="jumbotron-fluid3 text-center three" id="three">
          <span className="display-3"></span>
          <div className="container">
  <div className="row">
  <div className="col-1  "></div>

    <div className="col-sm-12 col-lg-12 marginLogo2"><Experience/></div>
    <div className="col-1 "></div>
  </div></div>
        </div>
        <div className="jumbotron-fluid4 text-center four " id="four">
          <span className="display-3"></span> <div className="container-fluid">
  <div className="row">
    <div className="col-2 "></div>
    <div className="col-sm-12 col-lg-12 marginLogo2 "><Projets nom="02-Projets"/></div>
    <div className="col-2 "></div>
  </div>
  </div>
        </div>

        <div className="jumbotron-fluid4 text-center five " id="five">
          <span className="display-3"></span> <div className="container-fluid">
  <div className="row">
    <div className="col-2 "></div>
    <div className="col-sm-12 col-lg-12 marginLogo2 "><Education nom="03-Education"/></div>
    <div className="col-2 "></div>
  </div>
  </div>
        </div>

        <div className="container-fluid">
  <div className="row">
    <div className="col "></div>
    <div className="col-sm-12 col-lg-8 margin "><Social git="https://github.com/Mongithabet"/></div>
    <div className="col-5 "></div>
  </div>
  </div>
      </div>
      </Switch>
      </Router>
        )
    }
}
