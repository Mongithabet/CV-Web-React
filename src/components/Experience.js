import React, { Component } from 'react'
import tt from './icons/tt.svg'
import gct from './icons/gct.png'
import tpc from './icons/tpc.png'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
export default class Experience extends Component {
  

    render() {
        return (
          <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#172A45', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #172A45' }}
            date="2007 - 2020"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
         
          >
            <h3 className="vertical-timeline-element-title">Développeur au sein de la Société TECHNOPC </h3>
            <h4 className="vertical-timeline-element-subtitle"><img className="img2"  src={tpc} width="100" height="100"  alt="tpc"/></h4>
            <p>Missions et tâches réalisées :  Développement et mise en page des sites Web avec l’intégration des éléments. Développement des Applications bureautiques  Outils utilisés : Spring Boot, ReactJS, Angular, React Native, SQL server, MySQL, CSS, HTML, JQUERY …             </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#172A45', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #172A45' }}

            date="2019 - 2020"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
           
          >
            <h3 className="vertical-timeline-element-title">Groupe Chimique Tunisien</h3>
            <h4 className="vertical-timeline-element-subtitle"><img className="img2"  src={gct} width="100" height="100"  alt="gct"/></h4>
            <p>
            Missions et tâches réalisées :  Conception et développement d’une application avec Java. Application de gestion des abonnés GCT.  
 Outils utilisés : Java, Jasper Reports, SQL SERVER, UML Lien : <a href="https://www.youtube.com/channel/UCijIPSUnCs-WGse1q4mfoZw ">https://www.youtube.com/channel/UCijIPSUnCs-WGse1q4mfoZw</a>            </p>
          
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#172A45', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #172A45' }}

            date="2012 - 2020"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
           
          >
            <h3 className="vertical-timeline-element-title">Tunisie Telecom </h3>
            <h4 className="vertical-timeline-element-subtitle"><img className="img2"  src={tt} width="100" height="100"  alt="tt"/>Stage PFE</h4>
            <p>
            Missions et tâches réalisées : Conception et réalisation d’une Application de Push-pull Des SMS via une interface Web.  Outils utilisés : Linux, Html, PHP, JavaScript, CSS... 
            </p>
          </VerticalTimelineElement>
   
        
        
          <VerticalTimelineElement

            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            
          />
        </VerticalTimeline>
        )
    }
}
