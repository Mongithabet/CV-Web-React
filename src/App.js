import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Apropos from './components/Apropos'
import Competences from './components/Competences'
import Progress from './components/Progress'
import Experience from './components/Experience'
import Projets from './components/Projets'
import Education from './components/Education'
import Social from './components/Social'

function App() {
  return (
    <div className="container bg">
              <Navbar/>
              <br/>
              <br/>
              <br/>
              <br/>
              <div className="container-fluid">
              <div className="row">
  <div className="col-2  "></div>
  <div className=" col-sm-12 col-lg-10 ">
              <Apropos/>
              <div className="col-2"></div>
</div>
</div></div>
              <div className="container-fluid">
              <div className="row">
  <div className="col-2  "></div>
  <div className=" col-sm-12 col-lg-8  "> <Competences 
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
<br/>
<div className="container-fluid">
  <div className="row">
    <div className="col-2 "></div>
    <div className="col-sm-12 col-lg-8 "><Experience/></div>
    <div className="col-2 "></div>
  </div>
  <div className="container-fluid">
  <div className="row">
    <div className="col-2 "></div>
    <div className="col-sm-12 col-lg-8 "><Projets/></div>
    <div className="col-2 "></div>
  </div>
  </div>
  </div>
  <div className="container-fluid">
  <div className="row">
    <div className="col-2 "></div>
    <div className="col-sm-12 col-lg-8 "><Education/></div>
    <div className="col-2 "></div>
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
  <br/><br/>
  <div className="container-fluid">
  <div className="row">
    <div className="col-2 "></div>
    <div className="col-sm-12 col-lg-8 "><Social/></div>
    <div className="col-2 "></div>
  </div>
  </div>
  </div>
    
   
  );
}

export default App;
