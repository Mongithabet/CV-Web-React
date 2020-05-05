import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Apropos from './components/Apropos'
import Competences from './components/Competences'
import Progress from './components/Progress'

function App() {
  return (
    <div className="container bg">
              <Navbar/>
              <br/>
              <br/>
              <Apropos/>
             
              

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
                 prog4="progress" prog5='' prog6=''
                 prog_bar4="progress-bar" prog_bar5='' prog_bar6=''

               
                 />}
              />
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
                 prog4="progress" prog5='progress' prog6='progress'
                 prog_bar4="progress-bar" prog_bar5='progress-bar' prog_bar6='progress-bar'

                 />}
               />
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
                 prog4="progress" prog5='' prog6=''
                 prog_bar4="progress-bar" prog_bar5='' prog_bar6=''

                 />}
               />
  <Competences nom = ''  title='Autres' cont='Autres Technologies: Micronaut, ElasticSearch, Spring Security, REST APIs, Jenkins, Kubernetes, Docker, AWS, Google Cloud
Méthodologies & Conception: UML, Scrum
Testing: Test Driven Development, JUnit, Jasmine, ChaiJS, Enzyme
Outils: GIT, IntelliJ, Slack
'/>
    </div>
  );
}

export default App;
